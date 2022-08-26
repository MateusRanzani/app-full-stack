import type { NextPage } from 'next'
import Component from "../components/login-btn.jsx"

const AppPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Bem vindo a página App.</h1>
     <Component/>
    </div>
  )
}

export default AppPage
