import { arrayMove } from "@dnd-kit/sortable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import toast from "react-hot-toast";

interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export default function useGetTopics(courseId: string, charpterId: string) {
  const query = useQuery({
    queryKey: ["topics", charpterId],
    queryFn: async () => {
      const res = await axios.get(
        `course/${courseId}/chapter/${charpterId}/curriculum`
      );
      const topicsWithId = res.data.curriculum.map(
        (topic: { _id: string }) => ({
          ...topic,
          id: topic._id,
        })
      );
      return { ...res.data, curriculum: topicsWithId };
    },
  });
  return query;
}

export function useDeleteTopic({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (topicId) => {
      const response = await axios.delete(
        `course/${params[1]}/chapter/${params[0]}/curriculum/${topicId}`
      );
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["topics", params[0]], (old: any) => {
        return {
          ...old,
          curriculum: [
            ...old.curriculum.filter((topic: any) => topic._id !== variables),
          ],
        };
      });
      toast.success("Topic deleted successfully");
      onSuccess && onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function useReorderTopic({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      topicId,
      order,
    }: {
      topicId: string;
      order: { startPosition: number; endPosition: number };
    }) => {
      queryClient.setQueryData(["topics", params[0]], (old: any) => {
        return {
          ...old,
          curriculum: [
            ...arrayMove(
              old.curriculum,
              order.startPosition - 1,
              order.endPosition - 1
            ),
          ],
        };
      });
      const response = await axios.patch(
        `course/${params[1]}/chapter/${params[0]}/curriculum/${topicId}`,
        {
          startPosition: String(order.startPosition),
          endPosition: String(order.endPosition),
        }
      );
      return response.data;
    },
    onSuccess,
    onError,
  });
  return mutation;
}

export function useAttachFile() {
  const params = useGetParams();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      getProgress,
      file,
    }: {
      getProgress: (progress: Number) => void;
      file: File;
    }) => {
      const formData = new FormData();
      formData.append("resources", file);
      const res = await axios.patch(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/resources`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(progressEvent) {
            getProgress(progressEvent.progress);
          },
        }
      );
      return res.data;
    },
    onSuccess: (res, { file }) => {
      const newResource = {
        title: file.name,
        size: file.size,
        url: URL.createObjectURL(file),
      };
      queryClient.setQueryData([params[1], params[0]], (old: any) => {
        return { ...old, resources: [newResource, ...old.resources] };
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutation;
}

export function useDeleteAttachedFile() {
  const params = useGetParams();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ resourceId }: { resourceId: string }) => {
      const res = await axios.delete(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/resources/${resourceId}`
      );
      return res;
    },
    onSuccess: (res, { resourceId }) => {
      queryClient.setQueryData([params[1], params[0]], (old: any) => {
        const newResources = old.resources.filter(
          (ele) => ele._id !== resourceId
        );
        return { ...old, resources: newResources };
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutation;
}
