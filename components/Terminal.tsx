import React from "react";

interface OutputDetailsType {
  status?: {
    id: number;
  };
  compile_output?: string;
  stdout?: string;
  stderr?: string;
}
    
const Terminal = ({ outputDetails }: { outputDetails: OutputDetailsType }) => {
  const getOutput = () => {
    if (outputDetails) {
      let statusId = outputDetails?.status?.id;

      if (statusId === 6) {
        // compilation error
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {atob(outputDetails?.compile_output)}
          </pre>
        );
      } else if (statusId === 3) {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-green-500">
            {atob(outputDetails.stdout) !== null
              ? `${atob(outputDetails.stdout)}`
              : null}
          </pre>
        );
      } else if (statusId === 5) {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {`Time Limit Exceeded`}
          </pre>
        );
      } else {
        return (
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {atob(outputDetails?.stderr)}
          </pre>
        );
      }
    }
  };
  return (
    <div>
      <h1 className="font-bold text-lg bg-[#1C2025] text-gray-300 px-2 border-t border-b border-gray-600">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1C2025] p-4  text-white font-normal text-sm overflow-y-auto flex gap-3">
        <span className="text-cyan-400">Online-vs-code : </span>
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
};

export default Terminal;
