import { arrayMove } from "@dnd-kit/sortable";
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
        const newQuiz = { ...newData, type: "quiz" };
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
      return response.data;
    },
    onSuccess: (res, newData) => {
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        return { ...old, ...newData };
      });
      queryClient.invalidateQueries({
        queryKey: ["topics", params[2]],
      });
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to update quiz";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutate;
}

// Questions API
export function useAddQuestion({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async ({ type }: { type: "mcq" | "file" | "text" }) => {
      const response = await axios.post(`quiz/${params[0]}/question`, {
        type,
        text: "Question",
      });
      return response.data.question;
    },
    onSuccess: (newQuestion) => {
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        if (!old.questions) {
          return { ...old, questions: [newQuestion] };
        }
        return { ...old, questions: [...old.questions, newQuestion] };
      });
      onSuccess && onSuccess(newQuestion);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to add question";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutate;
}

export function useDeleteQuestion({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async (questionId: string) => {
      const response = await axios.delete(
        `quiz/${params[0]}/question/${questionId}`
      );
      return response.data.question;
    },
    onSuccess: (result, questionId) => {
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        const newQuestions = old.questions.filter(
          (ele: any) => ele.id !== questionId
        );
        const newQuiz = { ...old, questions: newQuestions };
        return newQuiz;
      });
      onSuccess && onSuccess(result);
    },
    onError: (error: any) => {
      const message =
        error.response?.data.message || "Failed to delete question";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}

export function useUploadQuestionImage({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      image,
      questionId,
      getProgress,
    }: {
      image: File;
      questionId: string;
      getProgress: (progress: number) => void;
    }) => {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.patch(
        `quiz/${params[0]}/question/${questionId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            getProgress(progressEvent.progress);
          },
        }
      );
      return response.data;
    },
    onSuccess: (res, { questionId, image }) => {
      queryClient.setQueryData(
        ["quiz", params[0]],
        (oldQuiz: {
          questions: {
            id: string;
          }[];
        }) => {
          const newQuestions = oldQuiz.questions.map((ele) =>
            ele.id === questionId
              ? { ...ele, imageUrl: URL.createObjectURL(image) }
              : ele
          );
          const newQuiz = { ...oldQuiz, questions: newQuestions };
          return newQuiz;
        }
      );
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message =
        error.response?.data.message || "Failed to upload the image";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}
export function useUpdateQuestion({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      data,
      questionId,
    }: {
      data: any;
      questionId: string;
    }) => {
      const response = await axios.patch(
        `quiz/${params[0]}/question/${questionId}`,
        data
      );
      return response.data;
    },
    onSuccess: (res, { questionId, data }) => {
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        const newQuestions = old.questions.map((ele: any) =>
          ele.id === questionId ? { ...ele, ...data } : ele
        );
        const newQuiz = { ...old, questions: newQuestions };
        return newQuiz;
      });
      toast.success("Question updated successfully");
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message =
        error.response?.data.message || "Failed to update question";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ff1c6d6 (added sorting to questions and options)

export function useReorderQuestions({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      questionId,
      order,
    }: {
      questionId: string;
      order: {
        startPosition: number;
        endPosition: number;
      };
    }) => {
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        const newQuiz = {
          ...old,
          questions: [
            ...arrayMove(
              old.questions,
              order.startPosition - 1,
              order.endPosition - 1
            ),
          ],
        };
        return newQuiz;
      });
      const response = await axios.patch(
        `quiz/${params[0]}/question/${questionId}?change_order=true`,
        order
      );
      return response.data;
    },
    onSuccess: (res) => {
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message =
        error.response?.data.message || "Failed to reorder questions";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}

<<<<<<< HEAD
=======
>>>>>>> 7910483 (finished basic quiz structure)
=======
>>>>>>> ff1c6d6 (added sorting to questions and options)
// options api
export function useAddOption({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async (questionId: string) => {
      const response = await axios.post(
        `quiz/${params[0]}/question/${questionId}`,
        {
          text: "Option",
          correctAnswer: false,
        }
      );
      return response.data.option;
    },
    onSuccess: (newOption, questionId) => {
      queryClient.setQueryData(
        ["quiz", params[0]],
        (oldQuiz: {
          questions: {
            id: string;
            options?: any[];
          }[];
        }) => {
          const newQuestions = oldQuiz.questions.map((ele) =>
            ele.id === questionId
              ? {
                  ...ele,
                  options: ele.options
                    ? [...ele.options, newOption]
                    : [newOption],
                }
              : ele
          );
          const newQuiz = { ...oldQuiz, questions: newQuestions };
          return newQuiz;
        }
      );
      onSuccess && onSuccess(newOption);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to add option";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutate;
}

export function useDeleteOption({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutate = useMutation({
    mutationFn: async ({
      questionId,
      optionId,
    }: {
      optionId: string;
      questionId: string;
    }) => {
      const response = await axios.delete(
        `quiz/${params[0]}/question/${questionId}/option/${optionId}`
      );
      return response.data.option;
    },
    onSuccess: (result, { questionId, optionId }) => {
      queryClient.setQueryData(
        ["quiz", params[0]],
        (oldQuiz: {
          questions: {
            id: string;
            options?: any[];
          }[];
        }) => {
          const newQuestions = oldQuiz.questions.map((ele) =>
            ele.id === questionId
              ? {
                  ...ele,
                  options: ele.options?.filter(
                    (option) => option.id !== optionId
                  ),
                }
              : ele
          );
          const newQuiz = { ...oldQuiz, questions: newQuestions };
          return newQuiz;
        }
      );
      onSuccess && onSuccess(result);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to delete option";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutate;
}

export function useUpdateOption({ onSuccess, onError }: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      data,
      questionId,
      optionId,
    }: {
      data: any;
      questionId: string;
      optionId: string;
      getProgress: (progress: number) => void;
    }) => {
      const response = await axios.patch(
        `quiz/${params[0]}/question/${questionId}/option/${optionId}`,
        data
      );
      return response.data;
    },
    onSuccess: (res, { questionId, optionId, data }) => {
      queryClient.setQueryData(
        ["quiz", params[0]],
        (oldQuiz: {
          questions: {
            id: string;
            options?: any[];
          }[];
        }) => {
          const newQuestions = oldQuiz.questions.map((ele) =>
            ele.id === questionId
              ? {
                  ...ele,
                  options: ele.options?.map((option) =>
                    option.id === optionId ? { ...option, ...data } : option
                  ),
                }
              : ele
          );
          const newQuiz = { ...oldQuiz, questions: newQuestions };
          return newQuiz;
        }
      );
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message = error.response?.data.message || "Failed to update option";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}

export function useUploadOptionImage({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      image,
      questionId,
      optionId,
      getProgress,
    }: {
      image: File;
      questionId: string;
      optionId: string;
      getProgress: (progress: number) => void;
    }) => {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.patch(
        `quiz/${params[0]}/question/${questionId}/option/${optionId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            getProgress(progressEvent.progress);
          },
        }
      );
      return response.data;
    },
    onSuccess: (res, { questionId, optionId, image }) => {
      queryClient.setQueryData(
        ["quiz", params[0]],
        (oldQuiz: {
          questions: {
            id: string;
            options?: any[];
          }[];
        }) => {
          console.log(URL.createObjectURL(image));
          const newQuestions = oldQuiz.questions.map((ele) =>
            ele.id === questionId
              ? {
                  ...ele,
                  options: ele.options?.map((option) =>
                    option.id === optionId
                      ? { ...option, imageUrl: URL.createObjectURL(image) }
                      : option
                  ),
                }
              : ele
          );
          const newQuiz = { ...oldQuiz, questions: newQuestions };
          return newQuiz;
        }
      );
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message =
        error.response?.data.message || "Failed to upload the image";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}

export function useReorderOptions({
  onSuccess,
  onError,
}: MutationFnProps = {}) {
  const queryClient = useQueryClient();
  const params = useGetParams();
  const mutation = useMutation({
    mutationFn: async ({
      questionId,
      optionId,
      order,
    }: {
      questionId: string;
      optionId: string;
      order: {
        startPosition: number;
        endPosition: number;
      };
    }) => {
      queryClient.setQueryData(["quiz", params[0]], (old: any) => {
        const newQuestions = old.questions.map((ele: any) =>
          ele.id === questionId
            ? {
                ...ele,
                options: [
                  ...arrayMove(
                    ele.options,
                    order.startPosition - 1,
                    order.endPosition - 1
                  ),
                ],
              }
            : ele
        );
        const newQuiz = { ...old, questions: newQuestions };
        return newQuiz;
      });
      const response = await axios.patch(
        `quiz/${params[0]}/question/${questionId}/option/${optionId}?change_order=true`,
        order
      );
      return response.data;
    },
    onSuccess: (res) => {
      onSuccess && onSuccess(res);
    },
    onError: (error: any) => {
      const message =
        error.response?.data.message || "Failed to reorder options";
      toast.error(message);
      onError && onError(error);
    },
  });
  return mutation;
}
