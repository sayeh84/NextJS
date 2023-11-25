import Link from 'next/link'
import { prisma } from './db'
import { TodoItem } from './componant/TodoItem'

async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.todo?.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await prisma.todo?.findMany()

  return (
    <>
      <header className="home">
        <h1>Todo</h1>
        <Link className="border" href="/new">
          New
        </Link>
      </header>

      {todos &&
        todos?.map((item) => (
          <TodoItem
            id={item.id}
            key={item.id}
            title={item.title}
            complete={item.complete}
            toggleTodo={toggleTodo}
          />
        ))}
    </>
  )
}
