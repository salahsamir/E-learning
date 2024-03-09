import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
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
        const newArticle = { ...newData, id: newData._id };
        return { ...old, curriculum: [...old.curriculum, newArticle] };
      });
      onSuccess(newData);
    },
    onError,
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
    onSuccess: (newData) => {
      queryClient.setQueryData(["topics", params[2]], (old: any) => {
        const newCurriculum = old.curriculum.map((cur: any) => {
          if (cur.id === newData._id) {
            return newData;
          }
          return cur;
        });
        return { ...old, curriculum: newCurriculum };
      });
      onSuccess(newData);
    },
    onError,
  });
  return mutate;
}
