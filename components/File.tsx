import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface FileType {
  image: HTMLImageElement;
  children: React.ReactNode;
  className?:string;
}

const File = ({image,children,className}:FileType) => {
  return (
    <div
      className={twMerge(
        className,`flex items-center px-4 py-3 gap-2 cursor-pointer hover:bg-[#323845] transition duration-150 border-r border-gray-800`
      )}
    >
      <Image src={image} alt="" width={20} />
      <p>{children}</p>
    </div>
  );
}

export default File