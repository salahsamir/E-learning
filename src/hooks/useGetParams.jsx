import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useGetParams() {
  const location = useLocation();
  const arr = useMemo(() => {
    const path = location.pathname.split("/");
    path.reverse();
    return path;
  }, [location.pathname]);
  return arr;
}
