import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetTopics(courseId: string, charpterId: string) {
  const query = useQuery({
    queryKey: ["topics"],
    queryFn: async () => {
      const res = await axios.get(
        `course/${courseId}/chapter/${charpterId}/curriculum`
      );
      return res.data.curriculum;
    },
  });
  return query;
}
