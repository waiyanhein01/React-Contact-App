import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, SignIn, SignUP } from './page/page'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign_up' element={<SignUP/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
