import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export function useGetCourses() {
  const query = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const data = await axios.get("course?view=instructor");
      return data.data.courses;
    },
  });
  return query;
}

export function useGetCourse(id: string) {
  const query = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const data = await axios.get(`course/${id}`);
      return data.data.course;
    },
  });
  return query;
}

export function useAddCourse({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("course", data);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["courses"], (old: any) => {
        return [...old, res.course];
      });
      toast.success("Course added successfully");
      onSuccess && onSuccess(res);
    },
    onError(error: any) {
      toast.error(error.response.data?.message || "Failed to add course");
      onError && onError(error);
    },
  });
  return mutation;
}

export function useUpdateCourse({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { id: string; data: any }) => {
      const response = await axios.patch(`course/${data.id}`, data.data);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["courses"], (old: any) => {
        return old.map((course: { _id: string }) => {
          if (course._id === res.course._id) {
            return res.course;
          }
          return course;
        });
      });
      toast.success("Course updated successfully");
      onSuccess && onSuccess(res);
    },
    onError(error: any) {
      toast.error(error.response.data?.message || "Failed to update course");
      onError && onError(error);
    },
  });
  return mutation;
}

export function useDeleteCourse({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await axios.delete(`course/${id}`);
      return response.data;
    },
    onSuccess(res, variables) {
      queryClient.setQueryData(["courses"], (old: any) => {
        return old.filter(
          (course: { _id: string }) =>
            course._id !== (variables as unknown as string)
        );
      });
      toast.success("Course deleted successfully");
      onSuccess && onSuccess(res);
    },
    onError(error: any) {
      toast.error(error.response.data?.message || "Failed to delete course");
      onError && onError(error);
    },
  });
  return mutation;
}

export function usePublishCourse({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await axios.patch(`course/${id}/submit`);
      return response.data;
    },
    onSuccess(res) {
      queryClient.setQueryData(["courses"], (old: any) => {
        return old.map((course: { _id: string }) => {
          if (course._id === res.course._id) {
            return res.course;
          }
          return course;
        });
      });
      toast.success("Course published successfully");
      onSuccess && onSuccess(res);
    },
    onError(error: any) {
      toast.error(error.response.data?.message || "Failed to publish course");
      onError && onError(error);
    },
  });
  return mutation;
}
