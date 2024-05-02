import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
export function useGetWorkshops({
  categoryId,
  search,
}: { categoryId?: string; search?: string } = {}) {
  const queryKey = ["workshops", "all"];
  if (categoryId) queryKey.push(categoryId);
  if (search) queryKey.push(search);
  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await axios.get(
        `/workshop?view=all${categoryId ? "&categoryId=" + categoryId : ""}${
          search ? "&search=" + search : ""
        }&limit=10&page=${pageParam}`
      );
      return res.data.results;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: [], pages, lastPageParam) => {
      if (lastPage.length < 10) return undefined;
      return lastPageParam + 1;
    },
  });
  return query;
}

export function useGetWorkshop({ workshopId }: { workshopId: string }) {
  const query = useQuery({
    queryKey: ["workshop", "all", workshopId],
    queryFn: async () => {
      const res = await axios.get(`workshop/${workshopId}?view=all`);
      return res.data.results;
    },
  });
  return query;
}
