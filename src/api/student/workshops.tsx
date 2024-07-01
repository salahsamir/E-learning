import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetBoughtWorkshops() {
  const query = useQuery({
    queryKey: ["bought-workshops"],
    queryFn: async () => {
      const res = await axios.get("user/BoughtCourses?view=workshop");
      return res.data.workshop;
    },
  });
  return query;
}
