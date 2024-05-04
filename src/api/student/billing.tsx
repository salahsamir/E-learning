import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export function useBilling() {
  const query = useQuery({
    queryKey: ["billing"],
    queryFn: async () => {
      const res = await axios.get("user/order");
      return res.data;
    },
  });
  return query;
}

export function useRefund() {
  const mutation = useMutation({
    mutationFn: async ({ transactionId }: { transactionId: string }) => {
      const res = await axios.patch("user/refund/" + transactionId);
      return res.data;
    },
    onSuccess: (res) => {
      toast.success("Transaction was refunded successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutation;
}
