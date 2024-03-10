import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useGetParams from "hooks/useGetParams";
import toast from "react-hot-toast";
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

export function useUpdateQuiz({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.patch(`quiz/${params[0]}`, data);
      return response.data.quiz;
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(["quiz", params[0]], newData);
      toast.success("Quiz updated successfully");
      onSuccess && onSuccess(newData);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to update quiz";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutate;
}

export function useAddQuestion({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async ({ type }: { type: "mcq" | "file" | "text" }) => {
      const response = await axios.post(`quiz/${params[0]}/question`, {
        type,
      });
      return response.data;
    },
    onSuccess: (newData) => {
      console.log(newData);
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        return { ...old, questions: [...old.questions, newData] };
      });
      toast.success("Question added successfully");
      onSuccess && onSuccess(newData);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to add question";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutate;
}
