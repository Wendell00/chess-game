import Image from 'next/image'
import Aside from './components/aside'
import Main from './components/main'

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
        <Aside/>
        <Main/>
    </div>
  )
}
