import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  useEffect(() => {
    localStorage.removeItem("token");
    queryClient.clear();
    navigate("/signin");
  }, [queryClient, navigate]);
  return "";
};

export default Logout;
