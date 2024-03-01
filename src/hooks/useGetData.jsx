import axios from "axios";
import { useEffect, useState } from "react";
import { BaseApi } from "util/BaseApi";

export default function useGetData(path, initialFetch = true) {
  const [data, setData] = useState("");
  const [refetch, setRefetch] = useState(initialFetch);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (refetch) {
      setError(false);
      setLoading(true);
      axios
        .get(BaseApi + "/" + path, {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setError(false);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
      setRefetch(false);
    }
  }, [refetch]);
  return { data, loading, error, setRefetch };
}
