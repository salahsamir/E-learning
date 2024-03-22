import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export function useGetRevenue() {
  const query = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await axios.get("user/revenue");
      return res.data;
    },
  });
  return query;
}

export function useWithdrawRevenue({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (email) => {
      const res = await axios.patch("user/withdraw", {
        email,
      });
      return res.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["revenue"],
      });
      toast.success("Withdrawal request sent successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(
        error.response.data?.message || "Failed to send withdrawal request"
      );
      onError && onError(error);
    },
  });
  return mutation;
}
