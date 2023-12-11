'use client'
import { useState } from 'react'
type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo(value: string, value2: boolean): void
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
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
      className={` ${isTouched ? 'bg-red' : 'bg-white'}`}
    >
      <li className=" flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer-checked:line-thought peer-checked:text-slate-500 "
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <h1>test200</h1>
        <label htmlFor={id}>{title}</label>
      </li>
    </div>
  )
}
