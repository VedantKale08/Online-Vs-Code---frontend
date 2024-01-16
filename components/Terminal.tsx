import React, { useEffect, useState } from "react";

interface OutputDetailsType {
  status?: {
    id: number;
  };
  compile_output?: string;
  stdout?: string;
  stderr?: string;
}

const Terminal = ({ outputDetails }: { outputDetails: OutputDetailsType }) => {
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);
  const getOutput = () => {
    if (outputDetails) {
      let statusId = outputDetails?.status?.id;
      if (statusId === 6) {
        // compilation error
        setOutput(atob(outputDetails?.compile_output));
      } else if (statusId === 3) {
        setOutput(atob(outputDetails?.stdout));
      } else if (statusId === 5) {
        setOutput("Time limit exceeded");
      } else {
        setOutput(atob(outputDetails?.stderr));
        setError(true);
      }
    }
  };

  useEffect(()=>{
    getOutput();
  },[outputDetails])
  
  return (
    <div>
      <h1 className="font-bold text-lg bg-[#1C2025] text-gray-300 px-2 border-t border-b border-gray-600">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1C2025] p-4  text-white font-normal text-sm overflow-y-auto flex gap-3">
        <span className="text-cyan-400">Online-vs-code : </span>
        {outputDetails ? (
          <pre
            className={`px-2 py-1 font-normal text-xs ${
              error ? "text-red-500" : "text-green-500"
            }`}
          >
            {output}
          </pre>
        ) : null}
      </div>
    </div>
  );
};

export default Terminal;
