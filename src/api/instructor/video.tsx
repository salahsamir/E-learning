import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import toast from "react-hot-toast";

interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export function useGetVideo() {
  const params = useGetParams();
  const query = useQuery({
    queryKey: ["video", params[0]],
    queryFn: async () => {
      const res = await axios.get(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}`
      );
      return res.data.video;
    },
  });
  return query;
}

export function useUpdateVideo({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.patch(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/video`,
        data
      );
      return res.data;
    },
    onSuccess(res, newData) {
      queryClient.setQueryData(["video", params[0]], (old: any) => {
        return { ...old, ...newData };
      });
      toast.success("Video updated successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to update video");
      onError && onError(error);
    },
  });
  return mutation;
}

export function useUploadSubtitle() {
  const params = useGetParams();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      file,
      language,
      getProgress,
    }: {
      file: File;
      language: string;
      getProgress?: (progress: number) => void;
    }) => {
      const formData = new FormData();
      formData.append("subtitles", file);
      formData.append("subtitleslanguage", language);
      const res = await axios.patch(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/video?upload=subtitles`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            getProgress && getProgress(event.progress);
          },
        }
      );
      return res.data;
    },
    onSuccess: (res, { file, language }) => {
      const newSubtitle = {
        language: language,
        url: URL.createObjectURL(file),
      };
      queryClient.setQueryData(["video", params[0]], (old: any) => {
        return { ...old, subtitles: [newSubtitle, ...old.subtitles] };
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "There was an error");
    },
  });
  return mutation;
}

export function useDeleteVideoSubtitle() {
  const params = useGetParams();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ subtitleId }: { subtitleId: string }) => {
      const res = await axios.patch(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/video?delete=subtitles`,
        {
          subtitlesId: subtitleId,
        }
      );
      return res.data;
    },
    onSuccess: (res, { subtitleId }) => {
      queryClient.setQueryData([params[1], params[0]], (old: any) => {
        const newSubtitles = old.subtitles.filter(
          (ele) => ele._id !== subtitleId
        );
        return { ...old, subtitles: newSubtitles };
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "There was an error");
    },
  });
  return mutation;
}
