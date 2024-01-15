import { X } from 'lucide-react';
import React from 'react'

interface CreateFilePopupType {
  setShowPopup : (data:boolean) => void
}

const CreateFilePopup = ({ setShowPopup }: CreateFilePopupType) => {
  return (
    <div className="bg-black bg-opacity-50 absolute inset-0 z-[999] flex justify-center items-center">
      <div
        className="absolute right-6 top-5"
        onClick={() => setShowPopup(false)}
      >
        <X size={30}/>
      </div>
      <div className="bg-base border border-gray-600 rounded-xl p-5 pb-9  px-7 md:w-[30%] shadow-md flex flex-col items-center gap-6">
        <p className="text-lg text-white font-bold py-5">Creating new file</p>
        <div className="relative h-10 w-full flex-1">
          <input
            className="peer h-full w-full text-white rounded-[7px] border border-blue-gray-200 border-t bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            id="roomId"
            type="text"
            required
            // value={roomId}
            // onChange={(e) => setRoomId(e.target.value)}
          />
          <label
            htmlFor="roomId"
            className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >
            File name
          </label>
        </div>
        <button
          // onClick={joinRoom}
          className="bg-[#277dff] text-white rounded-md px-4 py-2 w-full hover:scale-105 transition duration-200"
        >
          Create new file
        </button>
      </div>
    </div>
  );
};

export default CreateFilePopup