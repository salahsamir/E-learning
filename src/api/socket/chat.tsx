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
      queryClient.setQueryData(["messages", message.to], (old: any) => {
        if (!old) return old;
        const newArr = JSON.parse(JSON.stringify(old));
        console.log("newArr: ", newArr);
        newArr.pages[0].unshift(message);
        return newArr;
      });
    });
  }, [queryClient]);
}
