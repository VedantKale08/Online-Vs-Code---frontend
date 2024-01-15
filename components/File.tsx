import { useFile } from "@/context/fileContext";
import { getImage } from "@/helpers/getImage";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface FileType {
  image: HTMLImageElement;
  children: React.ReactNode;
  className?: string;
  cancel?: boolean;
  id?: string;
  ext: string;
}

const File = ({ children, ext, className, cancel, id }: FileType) => {
  const { handleClose, currentFile, setFileOpen } = useFile();

  return (
    <div
      className={twMerge(
        className,
        `flex items-center px-4 py-3 gap-2 cursor-pointer hover:bg-[#323845] transition duration-150 border-r border-gray-800
        ${id && currentFile?.id === id && "bg-[#323845]"}`
      )}
      onClick={() => setFileOpen(id)}
    >
      <Image src={getImage(ext)} alt="" width={20} />
      <p>{children}</p>
      {cancel && id && (
        <X
          size={15}
          onClick={(e) => {
            e.stopPropagation();
            handleClose(id);
          }}
        />
      )}
    </div>
  );
};

export default File;
