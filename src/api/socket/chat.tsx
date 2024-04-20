import { useEffect } from "react";
import { socket } from "./socket.ts";
import { useQueryClient } from "@tanstack/react-query";
export function useCheckNewMessages() {
  const queryClient = useQueryClient();
  useEffect(() => {
    socket.on("recieveMsg", (message) => {
      console.log(message);
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });
      queryClient.setQueryData(
        ["chat", message.to],
        (oldData: { messages: any[] }) => {
          if (oldData) {
            return { ...oldData, messages: [...oldData.messages, message] };
          } else {
            return null;
          }
        }
      );
    });
  }, [queryClient]);
}
