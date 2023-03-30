import React from 'react'

const Spinner = () => {
  return (
    <div className=' flex flex-col space-y-4 justify-center align-center'>
      <div className='spinner'></div>
      <h2 className='text-bgDark text-lg font-semibold'>Loading</h2>
    </div>
  )
}

export default Spinner