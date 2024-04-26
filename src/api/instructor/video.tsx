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
