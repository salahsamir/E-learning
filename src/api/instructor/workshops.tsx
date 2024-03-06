import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
interface FunctionProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export default function useGetWorkshops() {
  const query = useQuery({
    queryKey: ["workshops"],
    queryFn: async () => {
      const data = await axios.get("workshop?view=instructor");
      return data.data.results;
    },
  });
  return query;
}

export function useGetWorkshop(id: string) {
  const query = useQuery({
    queryKey: ["workshop", id],
    queryFn: async () => {
      const data = await axios.get(`workshop/${id}`);
      return data.data.results;
    },
  });
  return query;
}

export function useAddWorkshop({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("workshop", data);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["workshops"], (old: any) => {
        return [...old, res.results];
      });
      onSuccess && onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function useUpdateWorkshop({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { id: string; data: any }) => {
      const response = await axios.patch(`workshop/${data.id}`, data.data);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["workshops"], (old: any) => {
        return old.map((workshop: { _id: string }) => {
          if (workshop._id === res.workshop._id) {
            return res.workshop;
          }
          return workshop;
        });
      });
      onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function useDeleteWorkshop({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await axios.delete(`workshop/${id}`);
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["workshops"], (old: any) => {
        return old.filter(
          (workshop: { _id: string }) =>
            workshop._id !== (variables as unknown as string)
        );
      });
      onSuccess(res);
    },
    onError(error) {
      onError(error);
    },
  });
  return mutation;
}

export function usePublishWorkshop({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.patch(`workshop/publish/${id}`);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["workshops"], (old: any) => {
        return old.map((workshop: { _id: string }) => {
          if (workshop._id === res.workshop._id) {
            return res.workshop;
          }
          return workshop;
        });
      });
      onSuccess(res);
    },
    onError,
  });
  return mutation;
}
