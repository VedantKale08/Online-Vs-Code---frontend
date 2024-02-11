"use client";
import { io, Socket } from "socket.io-client";

let socket: Socket;
// const ENDPOINT = "https://study-nex-backend.onrender.com";
const ENDPOINT = "http://localhost:5000";

socket = io(ENDPOINT);

export default socket;
