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

export function useGetRecommendedCourses() {
  const query = useQuery({
    queryKey: ["recommended-courses"],
    queryFn: async () => {
      const res = await axios.get("recommendation/recommendedForYou");
      return res.data.recommendations;
    },
  });
  return query;
}

export function useGetUpcommingWorkshops() {
  const query = useQuery({
    queryKey: ["upcoming-workshops"],
    queryFn: async () => {
      const res = await axios.get("recommendation/coming-workshops");
      return res.data.workshops;
    },
  });
  return query;
}
