import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetAnalysis() {
  const query = useQuery({
    queryKey: ["instructor", "analysis"],
    queryFn: async () => {
      const res = await axios.get("user/analysis");
      return res.data.analytics;
    },
  });
  return query;
}
