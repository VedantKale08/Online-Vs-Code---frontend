"use client";
import { useName } from "@/context/name";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const Lobby = () => {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  const { name, setName } = useName();

  const createAndJoin = () => {
    if (!name) return;
    const newRoomId = uuidv4();
    router.push(`/room/${newRoomId}`);
  };

  const joinRoom = () => {
    if (!name) return;
    if (roomId) {
      router.push(`/room/${roomId}`);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-base border border-gray-600 rounded-xl p-5 pb-9  px-7 lg:w-[30%] shadow-md flex flex-col items-center gap-6">
        <p className="text-3xl text-white font-bold py-5">
          Online <span className="text-[#277dff]">VS code</span>
        </p>
        <div className="flex w-full justify-center items-center gap-3">
          <div className="relative h-10 w-full flex-1">
            <input
              className="peer h-full w-full text-white rounded-[7px] border border-blue-gray-200 border-t bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              id="name"
              type="text"
              required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="name"
              className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Name
            </label>
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <div className="relative h-10 w-full flex-1">
            <input
              className="peer h-full w-full text-white rounded-[7px] border border-blue-gray-200 border-t bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              id="roomId"
              type="text"
              required
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <label
              htmlFor="roomId"
              className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Room id
            </label>
          </div>
          <button
            onClick={joinRoom}
            className="bg-[#277dff] text-white rounded-md px-4 py-2 hover:scale-105 transition duration-200"
          >
            Join Room
          </button>
        </div>
        <p className="text-white font-bold">OR</p>
        <button
          onClick={createAndJoin}
          className="bg-[#277dff] text-white rounded-md px-8 py-2 hover:scale-105 transition duration-200"
        >
          Create new Room
        </button>
      </div>
    </div>
  );
};

export default Lobby;
