import { io } from "socket.io-client";
import { BaseApi } from "util/BaseApi";

export const socket = io(BaseApi);
