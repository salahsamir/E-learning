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
export function useAddCoupon({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      courseId,
      discount,
      expireAt,
      isWorkshop = false,
    }: {
      courseId: string;
      discount: number;
      expireAt: string;
      isWorkshop: boolean;
    }) => {
      const response = await axios.post(`coupon`, {
        courseId,
        discount,
        expireAt,
      });
      return response.data.coupon;
    },
    onSuccess(res, { courseId, isWorkshop }) {
      try {
        queryClient.setQueryData(
          [isWorkshop ? "workshop" : "course", courseId],
          (old: any) => {
            if (!old.coupons) {
              return { ...old, coupons: [res] };
            }
            return { ...old, coupons: [...old.coupons, res] };
          }
        );
      } catch (error) {
        console.log(error);
      }
      onSuccess && onSuccess(res);
    },
    onError(error: any) {
      toast.error(error.response.data?.message || "Failed to add coupon");
      onError && onError(error);
    },
  });
  return mutation;
}
export function useDeleteCoupon({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      courseId,
      couponId,
    }: {
      courseId: string;
      couponId: string;
    }) => {
      const response = await axios.delete(`coupon/${couponId}`);
      return response.data;
    },
    onSuccess(res, { courseId, couponId }) {
      queryClient.setQueryData(["course", courseId], (old: any) => {
        return {
          ...old,
          coupons: old.coupons.filter(
            (coupon: { _id: string }) => coupon._id !== couponId
          ),
        };
      });
      toast.success("Coupon deleted successfully");
      onSuccess && onSuccess(res);
    },
    onError(error: any) {
      toast.error(error.response.data?.message || "Failed to delete coupon");
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
