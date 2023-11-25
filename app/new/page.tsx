import Link from 'next/link'
import { prisma } from '../db'
import { redirect } from 'next/navigation'

async function create(data: FormData) {
  'use server'
  const title = data.get('title')?.valueOf()

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid Title')
  }
  await prisma.todos.create({ data: { title: title, complete: true } })
  redirect('/')
}

export default async function Home() {
  return (
    <>
      <header className="home">
        <h1> New</h1>
      </header>
      <form action={create}>
        <input type="text" className="text-black" name="title" />
        <div>
          <p>
            <Link href="">Cancel</Link>
          </p>
          <p>
            <button type="submit" className="btn btn-">
              Submit
            </button>
          </p>
        </div>
      </form>
    </>
  )
}
