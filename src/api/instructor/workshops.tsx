import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import toast from "react-hot-toast";
interface FunctionProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export default function useGetWorkshops() {
  const queryKey = ["workshops", "instructor"];
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const data = await axios.get(`workshop?view=instructor`);
      return data.data.results;
    },
  });
  return query;
}

export function useGetWorkshop(id: string) {
  const query = useQuery({
    queryKey: ["workshop", "instructor", id],
    queryFn: async () => {
      const data = await axios.get(`workshop/${id}?view=instructor`);
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
      try {
        queryClient.setQueryData(["workshops", "instructor"], (old: any) => {
          console.log(old);
          return [...old, res.results];
        });
      } catch (err) {
        console.error(err);
      }
      toast.success("Workshop added successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to add workshop");
      onError && onError(error);
    },
  });
  return mutation;
}

export function useUpdateWorkshop({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (data: { id: string; data: any }) => {
      const response = await axios.patch(`workshop/${data.id}`, data.data);
      return response.data.results;
    },
    onSuccess(res) {
      queryClient.setQueryData(["workshop", "instructor", params[1]], res);
      queryClient.invalidateQueries({ queryKey: ["workshops", "instructor"] });
      toast.success("Workshop updated successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to update workshop");
      onError && onError(error);
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
      queryClient.setQueryData(["workshops", "instructor"], (old: any) => {
        return old.filter(
          (workshop: { _id: string }) =>
            workshop._id !== (variables as unknown as string)
        );
      });
      toast.success("Workshop deleted successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to delete workshop");
      onError && onError(error);
    },
  });
  return mutation;
}

export function usePublishWorkshop({ onSuccess, onError }: FunctionProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.patch(`workshop/publish/${id}`);
      return response.data.results;
    },
    onSuccess(res) {
      queryClient.setQueryData(["workshop", "instructor", params[0]], res);
      toast.success("Workshop published successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to publish workshop");
      onError && onError(error);
    },
  });
  return mutation;
}
