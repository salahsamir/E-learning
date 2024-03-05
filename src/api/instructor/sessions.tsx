import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetSessions(id) {
  const query = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const data = await axios.get(`workshop/${id}/allRooms`);
      return data.data.results;
    },
  });
  return query;
}

export function useGetSession(id: string) {
  const query = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const data = await axios.get(`room/${id}`);
      return data.data.results;
    },
  });
  return query;
}
