import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetChapters(courseId: string) {
  const query = useQuery({
    queryKey: ["chapters", courseId],
    queryFn: async () => {
      const data = await axios.get(`course/${courseId}/chapter`);
      return data.data.chapters;
    },
  });
  return query;
}

export function useGetChapter(courseId: string, chapterId: string) {
  const query = useQuery({
    queryKey: ["chapter", courseId, chapterId],
    queryFn: async () => {
      const data = await axios.get(`course/${courseId}/chapter/${chapterId}`);
      return data.data.chapter;
    },
  });
  return query;
}
