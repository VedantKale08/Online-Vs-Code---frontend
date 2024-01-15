"use client";
import { createContext, useContext, useState } from "react";

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
  setContent: (id: string | undefined,content:string) => void;
};

const fileContext = createContext<ExportValue | null>(null);

export const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);

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
    setCurrentFile(nFile);
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
          return {
            ...file,
            content: content,
          };
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
