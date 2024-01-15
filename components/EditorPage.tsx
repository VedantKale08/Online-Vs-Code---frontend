"use client";
import React, { useEffect, useRef } from "react";
import OpenedFile from "./OpenedFile";
import { Editor } from "@monaco-editor/react";

const EditorPage = () => {
  const editorRef = useRef<unknown>(null);
  const handleEditorDidMount = (editor: unknown, monaco: unknown) => {
    editorRef.current = editor;
  };

  return (
    <div className="">
      <OpenedFile />
      <Editor
        height="calc(100vh - 40px)"
        width="calc(100vw - 250px)"
        defaultLanguage="javascript"
        theme="vs-dark"
        className="mt-4 bg-base"
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default EditorPage;
