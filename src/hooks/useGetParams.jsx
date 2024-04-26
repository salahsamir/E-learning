import { useLocation } from "react-router-dom";

export default function useGetParams() {
  const location = useLocation();
  const path = location.pathname.split("/");
  path.reverse();
  return path;
}
