import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetPopularCoursesInCateg({
  categoryId,
}: {
  categoryId?: string;
} = {}) {
  const query = useQuery({
    queryKey: ["popular-courses", categoryId],
    queryFn: async () => {
      const res = await axios.get(
        `recommendation/popularCourses/${categoryId}`
      );
      return res.data.recommendations;
    },
  });
  return query;
}
