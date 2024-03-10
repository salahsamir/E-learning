import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import toast from "react-hot-toast";
interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}

export function useGetArticle() {
  const params = useGetParams();
  const query = useQuery({
    queryKey: ["article", params[0]],
    queryFn: async () => {
      const response = await axios.get(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}`
      );
      return response.data.article;
    },
  });
  return query;
}

export function useAddArticle({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `course/${params[1]}/chapter/${params[0]}/curriculum/article`,
        {
          title: "New Article",
          quillContent: " ",
        }
      );
      return response.data.article;
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(["topics", params[0]], (old: any) => {
        const newArticle = { ...newData, id: newData.curriculum };
        return { ...old, curriculum: [...old.curriculum, newArticle] };
      });
      onSuccess && onSuccess(newData);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to add article");
      onError && onError(error);
    },
  });
  return mutate;
}

export function useUpdateArticle({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async (article: any) => {
      const response = await axios.patch(
        `course/${params[3]}/chapter/${params[2]}/curriculum/${params[0]}/article`,
        article
      );
      return response.data.article;
    },
    onSuccess: (response, newData) => {
      queryClient.setQueryData(["article", params[0]], (old: any) => ({
        ...old,
        ...newData,
      }));
      queryClient.invalidateQueries({ queryKey: ["topics", params[2]] });
      toast.success("Article updated successfully");
      onSuccess && onSuccess(response);
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Failed to update article");
      onError && onError(error);
    },
  });
  return mutate;
}
