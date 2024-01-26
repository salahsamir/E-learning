import { createContext, useState } from "react";
export const UploadContext = createContext(null);
export default function UploadContextProvider({ children }) {
  const [uploadList, setUploadList] = useState([]);
  const [checkCompleted, setCheckCompleted] = useState(false);
  return (
    <UploadContext.Provider
      value={{ uploadList, setUploadList, checkCompleted, setCheckCompleted }}
    >
      {children}
    </UploadContext.Provider>
  );
}
