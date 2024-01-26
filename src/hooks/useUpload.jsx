import axios from "axios";
import { useState } from "react";

export default function useUpload(url, method = "patch") {
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [abort, setAbort] = useState(null);
  const [state, setState] = useState(null);
  function upload(body) {
    const controller = new AbortController();
    setAbort(controller);
    setProgress(0);
    setState("uploading");
    axios({
      method: method,
      url: url,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        token: `${localStorage.getItem("token")}`,
      },
      signal: controller.signal,
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percent = Math.floor((loaded * 100) / total);
        setProgress(percent);
      },
    })
      .then((res) => {
        setData(res.data);
        setState("completed");
      })
      .catch((err) => {
        setError(err);
        setState("error");
        return;
      });
  }
  return { data, progress, error, abort, state, upload };
}
