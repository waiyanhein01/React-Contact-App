import { Avatar } from '@mui/material'
import React from 'react'

const NavComponents = () => {
  return (
    <div>
      <div className=" h-16 px-32 flex flex-col justify-center">
        <div className=" flex justify-between items-center">
        <h1 className="">Contact</h1>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </div>
      </div>
    </div>
  )
}

export default NavComponents
