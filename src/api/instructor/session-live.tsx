import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
interface FunctionProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export function useGetSession() {
  const params = useGetParams();
  const query = useQuery({
    queryKey: ["session", params[0]],
    queryFn: async () => {
      const data = await axios.get(`room/${params[0]}`);
      return data.data.results;
    },
  });
  return query;
}

export function useJoinSession() {
  const params = useGetParams();
  const query = useQuery({
    queryKey: ["joinSession", params[0]],
    queryFn: async () => {
      const response = await axios.post("room/join", {
        roomId: params[0],
      });
      return response.data.token;
    },
  });
  return query;
}
