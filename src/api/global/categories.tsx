import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetCategories() {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await axios.get("category");
      return data.data.category;
    },
  });
  return query;
}
