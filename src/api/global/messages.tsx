import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useGetProfile } from "./profile.tsx";

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

export function useGetChat({
  id,
  user = false,
}: {
  id: string;
  user?: boolean;
}) {
  const query = useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      const response = await axios.get(`chat/${id}`);
      return response.data.chat;
    },
  });
  return query;
}
export function useGetChatByUser({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ userId }: any) => {
      const response = await axios.get(`chat/${userId}?user=true`);
      return response.data.chat;
    },
    onSuccess(chat) {
      console.log(chat);
      queryClient.setQueryData(["chat", chat._id], chat);
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
      onSuccess && onSuccess(chat);
    },
    onError(error: any) {
      const errorMsg =
        error.response.data?.ValidationError?.[0]?.message ||
        error.response.data?.message ||
        error.message;
      toast.error(errorMsg);
      onError && onError(error);
    },
  });
  return mutation;
}
export function useSendMessage({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const { data: user } = useGetProfile();
  const mutatation = useMutation({
    mutationFn: async (data: {
      chatId: string;
      message?: any;
      media?: File;
    }) => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "chatId") {
          formData.append(key, value);
        }
      });
      const response = await axios.post(
        `chat/${data.chatId}/messages`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.message;
    },
    onSuccess: (newData, { chatId, message, media }) => {
      const newMessage = {
        from: user._id,
        text: message,
        media: media && {
          url: URL.createObjectURL(media),
          typeOfMedia: media.type.split("/")[0],
          size: media.size,
          name: media.name,
        },
        time: Date.now(),
      };
      queryClient.setQueryData(["messages", chatId], (old: any) => {
        if (!old) return old;
        const newArr = JSON.parse(JSON.stringify(old));
        console.log("newArr: ", newArr);
        newArr.pages[0].unshift(newMessage);
        return newArr;
      });
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
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

export const useGetMessages = ({ chatId }) => {
  const query = useInfiniteQuery({
    queryKey: ["messages", chatId],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get(
        `chat/${chatId}/messages?page=${pageParam}`
      );
      return response.data.messages;
    },
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      console.log(lastPage);
      if (lastPage.length < 15) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    initialPageParam: 0,
  });
  return query;
};
