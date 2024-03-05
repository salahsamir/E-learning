import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetTopics(courseId: string, charpterId: string) {
  const query = useQuery({
    queryKey: ["topics"],
    queryFn: async () => {
      const data = await axios.get(
        `course/${courseId}/chapter/${charpterId}/curriculum`
      );
      return data.data.video;
    },
  });
  return query;
}
