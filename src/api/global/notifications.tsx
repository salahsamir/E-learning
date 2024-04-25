import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export function useGetNotifications() {
  const query = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const response = await axios.get("user/notifications");
      return response.data.notifications;
    },
  });
  return query;
}
