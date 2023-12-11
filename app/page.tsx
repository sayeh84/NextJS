import Link from 'next/link'
import { prisma } from './db'
import { TodoItem } from './componant/TodoItem'

async function toggleTodo(id: string, complete: boolean) {
  // 'use server'
  // await prisma.todo?.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  //const todos = await prisma.todo?.findMany()

  return (
    <div>
      {' '}
      test222
      <header className="home">
        <h1>Todo</h1>
        <Link className="border" href="/new">
          New
        </Link>
      </header>
      <TodoItem title="test" complete />
    </div>
  )
}
