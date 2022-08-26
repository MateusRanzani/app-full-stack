import type { NextPage } from 'next'
import Component from "../components/login-btn.jsx"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
     <Component/>
    </div>
  )
}

export default Home
