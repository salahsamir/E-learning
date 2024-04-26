import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import toast from "react-hot-toast";

interface FunctionProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export function useGetSessions() {
  const params = useGetParams();
  const query = useQuery({
    queryKey: ["sessions", params[0]],
    queryFn: async () => {
      const res = await axios.get(`workshop/${params[0]}/allRooms`);
      return res.data.results;
    },
  });
  return query;
}

export function useAddSession({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("room/create", data);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["sessions", params[0]], (old: any) => {
        return [...old, res.results];
      });
      toast.success("Session added successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to add session");
      onError && onError(error);
    },
  });
  return mutation;
}

export function useUpdateSession({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      sessionId,
      data,
    }: {
      sessionId: string;
      data: any;
    }) => {
      const response = await axios.patch(
        `workshop/${params[0]}/session/${sessionId}`,
        data
      );
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["chapters", params[0]], (old: []) => {
        const newList: { _id: string; title: string }[] = [...old];
        const index = newList.findIndex(
          (session: { _id: string }) => session._id === variables.sessionId
        );
        newList[index].title = variables.data.title;
        return newList;
      });
      onSuccess(res);
    },
    onError,
  });
  return mutation;
}

export function useDeleteSession({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`room/${id}`);
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["sessions", params[0]], (old: any) => {
        return old.filter(
          (session: { _id: string }) => session._id !== variables
        );
      });
      toast.success("Session deleted successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to delete session");
      onError && onError(error);
    },
  });
  return mutation;
}
