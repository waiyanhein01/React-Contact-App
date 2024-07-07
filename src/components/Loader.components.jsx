import { Loader2 } from 'lucide-react'
import React from 'react'

const LoaderComponents = () => {
  return (
    <div className=' flex items-center justify-center w-screen h-screen'>
      <Loader2 className=" ml-2 h-8 w-8 animate-spin text-blue-500" />
    </div>
  )
}

export default LoaderComponents
