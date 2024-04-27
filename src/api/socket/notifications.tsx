import { useQueryClient } from "@tanstack/react-query";
import { socket } from "./socket.ts";

export const useCheckNotifications = () => {
  const queryClient = useQueryClient();
  socket.on("notification", (notification) => {
    queryClient.setQueryData(["notifications"], (oldData: any) => {
      if (!oldData) {
        return [notification];
      }
      return [notification, ...oldData];
    });
    queryClient.setQueryData(["profile"], (oldData: any) => {
      return { ...oldData, unreadNotifyCount: oldData.unreadNotifyCount + 1 };
    });
  });
};
