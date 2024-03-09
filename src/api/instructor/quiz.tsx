import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
interface MutationFnProps {
  onSuccess?: (res: any) => void;
  onError?: (error: Error) => void;
}
export function useGetQuiz() {
  const params = useGetParams();
  const query = useQuery({
    queryKey: ["quiz", params[0]],
    queryFn: async () => {
      const response = await axios.get(`quiz/${params[0]}`);
      return response.data.quiz;
    },
  });
  return query;
}

export function useAddQuiz({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `course/${params[1]}/chapter/${params[0]}/curriculum/quiz`,
        {
          title: "New Quiz",
        }
      );
      return response.data.quiz;
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(["topics", params[0]], (old: any) => {
        const newQuiz = { ...newData, id: newData.curriculum };
        return { ...old, curriculum: [...old.curriculum, newQuiz] };
      });
      queryClient.setQueryData(["quiz", newData.curriculum], newData);
      onSuccess && onSuccess(newData);
    },
    onError,
  });
  return mutate;
}
