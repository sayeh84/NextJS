import Link from 'next/link'
import { prisma } from './db'
import { TodoItem } from './componant/TodoItem'

export default async function Home() {
  const todos = await prisma.todos.findMany()
  return
  ;<>
    <header className="home">
      <h1>Todo</h1>
      <Link className="border" href="/new">
        New
      </Link>
    </header>

    {todos.map((todo) => (
      <TodoItem
        id={todo.id}
        key={todo.id}
        title={todo.title}
        complete={todo.complete}
      />
    ))}
  </>
}
