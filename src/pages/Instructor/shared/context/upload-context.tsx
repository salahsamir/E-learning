import React from "react";
import { createContext, useState } from "react";
type UploadItem = {
  id: string;
  name: string;
  body: {};
  method: string;
  path: string;
};
interface UploadContextProps {
  uploadList: {
    current?: UploadItem;
    pending: UploadItem[];
    completed: UploadItem[];
    error: UploadItem[];
  };
  addItems: (items: UploadItem[]) => void;
  removeItem: (id: string, list: "pending" | "error" | "completed") => void;
  checkVisibility: () => boolean;
  cancelAll: () => void;
  cancelCurrentUpload: () => void;
  reupload: (id: string) => void;
  handleUploadComplete: () => void;
  handleErroredUpload: () => void;
}
export const UploadContext = createContext<UploadContextProps | null>(null);
export default function UploadContextProvider({ children }) {
  const [uploadList, setUploadList] = useState<
    UploadContextProps["uploadList"]
  >({
    current: undefined,
    pending: [],
    completed: [],
    error: [],
  });

  const addItems = (items: UploadItem[]) => {
    setUploadList((prev) => {
      if (!prev.current) {
        const [current, ...pending] = items;
        return {
          current,
          pending,
          completed: prev.completed,
          error: prev.error,
        };
      }
      return {
        ...prev,
        pending: [...prev.pending, ...items],
      };
    });
  };
  const removeItem = (id: string, list: "pending" | "error" | "completed") => {
    setUploadList((prev) => {
      return {
        ...prev,
        [list]: prev[list].filter((item) => item.id !== id),
      };
    });
  };

  const handleUploadComplete = () => {
    setUploadList((prev) => {
      const [current, ...pending] = prev.pending;
      const completedItem = prev.current;
      let completed = prev.completed;
      if (completedItem) completed = [...prev.completed, completedItem];
      return {
        current,
        pending,
        completed,
        error: prev.error,
      };
    });
  };
  const handleErroredUpload = () => {
    setUploadList((prev) => {
      const [current, ...pending] = prev.pending;
      const erroredItem = prev.current;
      let errorList = prev.error;
      if (erroredItem) errorList = [...prev.error, erroredItem];
      return {
        current,
        pending,
        completed: prev.completed,
        error: errorList,
      };
    });
  };
  const checkVisibility = () => {
    return (
      uploadList.pending.length > 0 ||
      uploadList.current !== undefined ||
      uploadList.error.length > 0
    );
  };
  const cancelAll = () => {
    setUploadList({
      current: undefined,
      pending: [],
      completed: [],
      error: [],
    });
  };
  const cancelCurrentUpload = () => {
    setUploadList((prev) => {
      const [current, ...pending] = prev.pending;
      return {
        current,
        pending,
        completed: prev.completed,
        error: prev.error,
      };
    });
  };
  const reupload = (id: string) => {
    setUploadList((prev) => {
      const item = prev.error.find((item) => item.id === id);
      if (prev.current) {
        if (item) {
          return {
            ...prev,
            pending: [...prev.pending, item],
            error: prev.error.filter((item) => item.id !== id),
          };
        }
      } else {
        return {
          ...prev,
          current: item,
          error: prev.error.filter((item) => item.id !== id),
        };
      }
      return prev;
    });
  };
  return (
    <UploadContext.Provider
      value={{
        uploadList,
        addItems,
        removeItem,
        checkVisibility,
        cancelAll,
        cancelCurrentUpload,
        reupload,
        handleUploadComplete,
        handleErroredUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
}

export function useUploadContext() {
  const context = React.useContext(UploadContext);
  if (!context) {
    throw new Error(
      "useUploadContext must be used within a UploadContextProvider"
    );
  }
  return context;
}
