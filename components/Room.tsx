"use client"
import { useName } from '@/context/name';
import React from 'react'
import Sidebar from './Sidebar';
import Editor from './Editor';

const Room = () => {
  const { name } = useName();  

  return (
    <div className='grid grid-cols-[250px,1fr] h-screen'>
        <Sidebar/>
        <Editor/>
    </div>
  )
}

export default Room