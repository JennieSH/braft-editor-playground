import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Editor = dynamic(import('../components/Editor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>
})

const Braft: NextPage = () => {
  const [text, setText] = useState('')

  return (
    <div className="flex gap-8 justify-center items-center min-h-screen px-28">
      <div className="border rounded w-full h-[600px]">
        <Editor text={text} setText={setText} />
      </div>
      <textarea className="border rounded outline-none w-full h-[600px]" value={text} readOnly />
    </div>
  )
}

export default Braft
