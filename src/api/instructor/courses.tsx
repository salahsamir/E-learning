import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

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

export function useEditCourse(id: string, data: any) {
  const mutation = useMutation({
    onSuccess(data, variables, context) {},
  });
  return mutation;
}
