"use client";
import socket from "@/components/Socket/socketInstance";
import { useParams } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { useName } from "./name";

export type File = {
  id?: string;
  name: string;
  content?: string;
  ext: string;
  isOpen?: boolean;
};

export type ExportValue = {
  files: File[];
  currentFile: File | null;
  handleNewFile: ({ name, ext }: File) => void;
  handleClose: (id: string) => void;
  setCurFile: (file: File) => void;
  setFileOpen: (id: string | undefined) => void;
  setContent: (id: string | undefined, content: string) => void;
  socketHandleFile: (file: File) => void;
};

const fileContext = createContext<ExportValue | null>(null);

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const roomId = useParams().id;
  const {id} = useName();

  const handleNewFile = ({ name, ext }: File) => {
    const nFile = {
      id: Math.random().toString(),
      name: name,
      content: "",
      ext: ext,
      isOpen: true,
    };
    setFiles((prev: File[]) => {
      const newFile = [nFile, ...prev];
      return newFile;
    });
    socket.emit("content-change", roomId, id, nFile);
    setCurrentFile(nFile);
  };

  const socketHandleFile = (file: File) => {
    setFiles((prevFiles: File[]) => {
      const fileIndex = prevFiles.findIndex(
        (prevFile) => prevFile.id === file.id
      );
      if (fileIndex !== -1) {
        const updatedFiles = prevFiles.map((prevFile, index) => {
          if (index === fileIndex) {
            return file;
          }
          return prevFile;
        });
        return updatedFiles;
      } else {
        return [file, ...prevFiles];
      }
    });
    setCurFile(file)
  };

  const handleClose = (id: string) => {
    setFiles((prev: File[]) => {
      const updatedFiles = prev.map((file) => {
        if (file.id === id) {
          return {
            ...file,
            isOpen: false,
          };
        }
        return file;
      });
      return updatedFiles;
    });
    if(currentFile && id === currentFile.id){
      setCurrentFile(null);
    }
  };

  const setCurFile = (file: File) => {    
    setCurrentFile(file);
  };

  const setFileOpen = (id: string|undefined) => {    
    setFiles((prev: File[]) => {
      const updatedFiles = prev.map((file) => {
        if (file.id === id) {
          return {
            ...file,
            isOpen: true,
          };
        }
        return file;
      });
      return updatedFiles;
    });
    files.find(file => file.id === id && setCurFile(file))
  };

  const setContent = (id: string | undefined,content:string) => {
    setFiles((prev: File[]) => {
      const updatedFiles = prev.map((file) => {
        if (file.id === id) {
          const nFile = {
            ...file,
            content: content,
          };
          socket.emit("content-change",roomId, id, nFile);
          return nFile;
        }
        return file;
      });
      return updatedFiles;
    });
  };

  return (
    <fileContext.Provider
      value={{
        files,
        currentFile,
        handleNewFile,
        handleClose,
        setCurFile,
        setFileOpen,
        setContent,
        socketHandleFile,
      }}
    >
      {children}
    </fileContext.Provider>
  );
};

export const useFile = () => {
  const fileValue = useContext(fileContext);
  if (!fileValue) throw new Error("File provider is not available for use");
  return fileValue;
};
