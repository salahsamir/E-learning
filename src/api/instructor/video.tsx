import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetVideo(
  courseId: string,
  charpterId: string,
  videoId: string
) {
  const query = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const data = await axios.get(
        `course/${courseId}/chapter/${charpterId}/curriculum/${videoId}`
      );
      return data.data.results;
    },
  });
  return query;
}
