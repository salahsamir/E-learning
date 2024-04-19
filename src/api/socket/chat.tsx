import { useEffect } from "react";
import { socket } from "./socket.ts";
export function useCheckNewMessages() {
  useEffect(() => {
    socket.on("recieveMsg", (date) => {
      console.log(date);
    });
  }, []);
}
