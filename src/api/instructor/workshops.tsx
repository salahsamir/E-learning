import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      const data = await axios.get(`workshop/${id}?view=instructor`);
      return data.data.results;
    },
  });
  return query;
}
