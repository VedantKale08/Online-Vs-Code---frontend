"use client";
import { useName } from "@/context/name";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import EditorPage from "./EditorPage";
import socket from "./Socket/socketInstance";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
import { useFile } from "@/context/fileContext";

const Room = () => {
  const { name, setId } = useName();
  const { socketHandleFile } = useFile();
  const roomId = useParams().id;

  useEffect(() => {
    const id = uuidv4();
    setId(id);
    socket.emit("join-room", roomId, id, name);
  }, []);

  useEffect(() => {
    socket.on("user-connected", (userId, userName) => {
      console.log(userId, " ", userName, " connected");
    });
    socket.on("content-change", (roomId, file) => {
      socketHandleFile(file);
    });
  }, []);

  return (
    <div className="grid grid-cols-[250px,1fr] h-screen">
      <Sidebar />
      <EditorPage />
    </div>
  );
};

export default Room;
