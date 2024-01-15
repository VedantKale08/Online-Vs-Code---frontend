"use client"
import { useName } from '@/context/name';
import React from 'react'
import Sidebar from './Sidebar';
import EditorPage from "./EditorPage";

const Room = () => {
  const { name } = useName();  

  return (
    <div className="grid grid-cols-[250px,1fr] h-screen">
      <Sidebar />
      <EditorPage />
    </div>
  );
}

export default Room