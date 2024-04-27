import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

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

export function useMarkNotificationAsRead({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (notificationId: string = "") => {
      const response = await axios.get(
        `notification${notificationId !== "" ? "/" : ""}${notificationId}`
      );
      return response.data;
    },
    onSuccess: (res, notificationId) => {
      queryClient.setQueryData(["notifications"], (oldData: any) => {
        return oldData.map((notification: any) => {
          if (notificationId === "") {
            return { ...notification, isRead: true };
          } else {
            if (notification._id === notificationId) {
              return { ...notification, isRead: true };
            }
            return notification;
          }
        });
      });
      queryClient.setQueryData(["profile"], (oldData: any) => {
        let newUnreadNotifyCount = oldData.unreadNotifyCount - 1;
        if (notificationId === "" || newUnreadNotifyCount <= 0) {
          newUnreadNotifyCount = 0;
        }
        return { ...oldData, unreadNotifyCount: newUnreadNotifyCount };
      });
      onSuccess && onSuccess(res);
    },
    onError: (error) => {
      toast.error("Error marking notification as read");
      onError && onError(error);
    },
  });
  return mutation;
}
