import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ transactionId }: { transactionId: string }) => {
      const res = await axios.patch("user/refund-order/" + transactionId);
      return res.data;
    },
    onSuccess: (res, { transactionId }) => {
      toast.success("Transaction was refunded successfully");
      queryClient.setQueryData(["billing"], (old: any) => {
        const newOrders = old.orders.map((ele) =>
          ele._id === transactionId ? { ...ele, status: "Refunded" } : ele
        );
        return { ...old, orders: newOrders };
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return mutation;
}
