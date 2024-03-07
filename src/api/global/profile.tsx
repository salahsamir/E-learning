import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useGetProfile() {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axios.get("user/profile");
      return response.data.newUser;
    },
  });
  return query;
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const mutatation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch("user/profile", data);
      return response.data.newUser;
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(["profile"], newData);
    },
  });
  return mutatation;
}
