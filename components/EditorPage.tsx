"use client";
import React, { useEffect, useRef, useState } from "react";
import OpenedFile from "./OpenedFile";
import { Editor } from "@monaco-editor/react";
import { useFile } from "@/context/fileContext";
import { getLanguage } from "@/helpers/getLanguage";
import axios from "axios";
import Terminal from "./Terminal";

const EditorPage = () => {
  const [outputDetails, setOutputDetails] = useState({
    status: {
      id: 0,
    },
    compile_output: "",
    stdout: "",
    stderr: "",
  });
  
  const [code, setCode] = useState("");
  const editorRef = useRef<unknown>(null);
  const terminalRef = useRef<unknown>(null);
  const { files, currentFile, setContent } = useFile();
  const handleEditorDidMount = (editor: unknown, monaco: unknown) => {
    editorRef.current = editor;
  };

  const handleEditChange = (value: string | undefined = "", event: unknown) => {
    if (currentFile) {
      setCode(value);
      setContent(currentFile.id, value);
    }
  };

  const handleCompile = () => {
    if (currentFile) {
      const formData = {
        language_id: getLanguage(currentFile.ext).id,
        // encode source code in base64
        source_code: btoa(code),
        stdin: btoa(""),
      };
      const options = {
        method: "POST",
        url: process.env.NEXT_PUBLIC_APP_RAPID_API_URL,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "x-rapidapi-ua": "RapidAPI-Playground",
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_APP_RAPID_API_HOST,
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_APP_RAPID_API_KEY,
        },
        data: formData,
      };
      axios
        .request(options)
        .then(function (response) {
          console.log("res.data", response.data);
          const token = response.data.token;
          checkStatus(token);
        })
        .catch((err) => {
          let error = err.response ? err.response.data : err;
          console.log(error);
        });
    }
  };

  const checkStatus = async (token: string) => {
    const options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutputDetails(response.data);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="">
      <OpenedFile handleCompile={handleCompile} />
      {files.length !== 0 && currentFile && (
        <Editor
          height="calc(100vh - 300px)"
          width="calc(100vw - 250px)"
          defaultLanguage={getLanguage(currentFile.ext).name}
          theme="vs-dark"
          path={currentFile.name}
          value={currentFile.content}
          className="mt-4 bg-base"
          onMount={handleEditorDidMount}
          onChange={handleEditChange}
        />
      )}
      {files.length !== 0 && currentFile && (
        <Terminal outputDetails={outputDetails} />
      )}
    </div>
  );
};

export default EditorPage;
