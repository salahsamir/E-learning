import { AxiosError } from "axios";

export function checkErrorStatus(error: AxiosError) {
  if (error.response?.status === 401 || error.response?.status === 403) {
    window.location.pathname = "logout";
  }
}
