import Link from 'next/link'
import { useState } from 'react'
import { prisma } from './db'
import { TodoItem } from './componant/TodoItem'

async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.todo?.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  //  const todos = await prisma.todo?.findMany()
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
      {' '}
      test222
      <header className="home">
        <h1>Todo</h1>
        <Link className="border" href="/new">
          New
        </Link>
      </header>
    </div>
  )
}
