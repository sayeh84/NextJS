'use client'
import { useState } from 'react'
type TodoItemProps = {
  title: string
  complete: boolean
  toggleTodo?(value: string, value2: boolean): void
}

export function TodoItem({ title, complete, toggleTodo }: TodoItemProps) {
  const [isTouched, setIsTouched] = useState(false)
  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setIsTouched(false)
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={` bg-red-600 border ${
        isTouched ? 'bg-lime-400 border w-[3rem]' : 'bg-white'
      }`}
    >
      <li className=" flex gap-1 items-center">
        <input
          type="checkbox"
          className="cursor-pointer peer-checked:line-thought peer-checked:text-slate-500 "
          defaultChecked={complete}
          onChange={(e) => toggleTodo && toggleTodo('', e.target.checked)}
        />
        <h1>test200</h1>
        <label htmlFor={''}>{title}</label>
      </li>
    </div>
  )
}
