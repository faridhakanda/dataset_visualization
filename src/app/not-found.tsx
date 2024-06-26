import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="mt-6 sm:mt-14 md:mt-14">
        {/* <Image src="/404Error.png" alt="404error" width="500" height="400" /> */}
        <h1>This page could not be found!</h1>
    </div>
  )
}

export default NotFound