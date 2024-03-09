import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export function useGetProfile() {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await axios.get("user/profile");
      return response.data.newUser;
    },
    staleTime: 60 * 1000,
  });
  return query;
}

export function useUpdateProfile({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutatation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch("user/profile", data);
      return response.data.newUser;
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(["profile"], newData);
      toast.success("Profile updated successfully");
      onSuccess && onSuccess(newData);
    },
    onError: (error: Error | any) => {
      const errorMsg =
        error.response.data?.ValidationError?.[0]?.message || error.message;
      console.log(error);

      toast.error(errorMsg);
      onError && onError(error);
    },
  });
  return mutatation;
}

export function useUploadProfileImage({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const mutatation = useMutation({
    mutationFn: async ({
      file,
      getProgress,
    }: {
      file: File;
      getProgress: (progress: number) => void;
    }) => {
      const formData = new FormData();
      formData.append("image", file);
      console.log(formData.get("image"));
      const response = await axios({
        method: "patch",
        url: "user/profile",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress(progressEvent) {
          getProgress(progressEvent.progress);
        },
      });
      return response.data.newUser;
    },
    onSuccess: (newData, { file }) => {
      queryClient.setQueryData(["profile"], (oldData: any) => {
        return {
          ...oldData,
          profilePic: { url: URL.createObjectURL(file) },
        };
      });
      toast.success("Profile image updated successfully");
      onSuccess && onSuccess(newData);
    },
    onError: (error: Error | any) => {
      const errorMsg = error.ValidationError?.[0]?.message || error.message;
      toast.error(errorMsg);
      onError && onError(error);
    },
  });
  return mutatation;
}

export function useDeleteAccount({ onSuccess, onError }: MutationFnProps = {}) {
  const navigate = useNavigate();
  const mutatation = useMutation({
    mutationFn: async () => {
      const response = await axios.delete("user/delete");
      return response.data;
    },
    onSuccess: (data) => {
      onSuccess(data);
      localStorage.removeItem("token");
      navigate("/");
    },
    onError,
  });
  return mutatation;
}
