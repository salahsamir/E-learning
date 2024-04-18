import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export function useGetChats() {
  const query = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const response = await axios.get("chat");
      return response.data.chat;
    },
  });
  return query;
}

export function useGetChat({ id }: { id: string }) {
  const query = useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      const response = await axios.get(`chat/${id}`);
      return response.data.chat;
    },
  });
  return query;
}

export function useSendMessage({ onSuccess, onError }: MutationFnProps = {}) {
  const mutatation = useMutation({
    mutationFn: async (data: {
      chatId: string;
      message?: any;
      media?: {
        file: File;
        name: string;
        type: string;
        size: number | string;
      };
    }) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const response = await axios.post("chat", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.message;
    },
    onSuccess: (newData) => {
      onSuccess && onSuccess(newData);
    },
    onError: (error: Error | any) => {
      const errorMsg =
        error.response.data?.ValidationError?.[0]?.message ||
        error.response.data?.message ||
        error.message;
      toast.error(errorMsg);
      onError && onError(error);
    },
  });
  return mutatation;
}
