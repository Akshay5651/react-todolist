"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setTasks([...tasks, { title, desc }])

    setTitle('')
    setDesc('')
  }

  let defaultMessage = <h2>No tasks to show. Please add few🖋️</h2>

  if (tasks.length > 0) {
    defaultMessage = tasks.map((t, idx) => {
      return <li className='mb-4 flex justify-between'>
        <h5 className='text-2xl font-bold'>{t.title}</h5>
        <h6 className='text-xl font-semibold'>{t.desc}</h6>
        <button id={idx}
          className='px-2 py-1 font-semibold text-md border-2 bg-red-600 text-yellow-50 rounded'
          onClick={()=>{
            deleteHandler(idx)
          }}
          >Delete</button>
      </li>
    })
  }

  const deleteHandler = (i) => {
    let copyTasks = [...tasks]
    copyTasks.splice(i,1)
    setTasks(copyTasks)
  }

  return (
    <>
      <h1 className='text-center text-white font-bold text-5xl bg-black p-4'>Todo-List</h1>
      <form onSubmit={submitHandler} className='flex items-center gap-8 px-5'>
        <h2>Title : </h2>
        <input className='m-4 p-2 font-bold text-md border-4 border-zinc-600 rounded'
          placeholder='Enter Title Here'
          value={title}
          onChange={(key) => {
            setTitle(key.target.value)
          }}>
        </input>

        <h2>Description : </h2>
        <input className='m-4 p-2 font-bold text-md border-4  border-zinc-600 rounded'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(keys) => {
            setDesc(keys.target.value)

          }}>
        </input>
        <button className='px-4 py-2 font-bold text-md border-2 bg-black text-yellow-50 rounded'>Add Task</button>
      </form>
      <div className='p-4 bg-cyan-100'>
        <ul className='p-2'>
          {defaultMessage}
        </ul>
      </div>
    </>
  )
}

export default page