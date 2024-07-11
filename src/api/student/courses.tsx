import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetBoughtCourses() {
  const query = useQuery({
    queryKey: ["bought-courses"],
    queryFn: async () => {
      const res = await axios.get("user/BoughtCourses?view=course");
      return res.data.courses;
    },
  });
  return query;
}
