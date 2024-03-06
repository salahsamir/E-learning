import { arrayMove } from "@dnd-kit/sortable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export default function useGetChapters(courseId: string) {
  const query = useQuery({
    queryKey: ["chapters", courseId],
    queryFn: async () => {
      const data = await axios.get(`course/${courseId}/chapter`);
      return data.data.chapters.map((chapter: { _id: string }) => ({
        ...chapter,
        id: chapter._id,
      }));
    },
  });
  return query;
}

export function useGetChapter(courseId: string, chapterId: string) {
  const query = useQuery({
    queryKey: ["chapter", chapterId],
    queryFn: async () => {
      const data = await axios.get(`course/${courseId}/chapter/${chapterId}`);
      return data.data.chapter;
    },
  });
  return query;
}

export function useAddChapter({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(`course/${params[0]}/chapter`, data);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["chapters", params[0]], (old: any) => {
        return [...old, { ...res.chapter, id: res.chapter._id }];
      });
      onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function useUpdateChapter({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (data: { chapterId: string; data: any }) => {
      const response = await axios.patch(
        `course/${params[0]}/chapter/${data.chapterId}`,
        data.data
      );
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["chapters", params[0]], (old: []) => {
        const newList: { id: string; title: string }[] = [...old];
        const index = newList.findIndex(
          (chapter: { id: string }) => chapter.id === variables.chapterId
        );
        newList[index].title = variables.data.title;
        return newList;
      });
      onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function useDeleteChapter({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (chapterId: string) => {
      const response = await axios.delete(
        `course/${params[0]}/chapter/${chapterId}`
      );
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["chapters", params[0]], (old: any) => {
        return old.filter((chapter: any) => chapter._id !== variables);
      });
      onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function useReorderChapter({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      chapterId,
      order,
    }: {
      chapterId: string;
      order: { startPosition: number; endPosition: number };
    }) => {
      queryClient.setQueryData(["chapters", params[0]], (old: any) => {
        return arrayMove(old, order.startPosition - 1, order.endPosition - 1);
      });
      const response = await axios.patch(
        `course/${params[0]}/chapter/${chapterId}?change_order=true`,
        {
          startPosition: String(order.startPosition),
          endPosition: String(order.endPosition),
        }
      );
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["chapters", params[0]], (old: any) => {
        const newChapters = old.map((chapter: any) => {
          if (chapter._id === res.chapter._id) {
            return res.chapter;
          }
          return chapter;
        });
        return newChapters;
      });
      onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}
