import React from 'react'

export const SectionStructure = ({ name, children }) => {
  return (
   
    <div className="max-w-7xl w-11/12 lg:w-4/5 mx-auto mt-4">
        <h2 className='text-xl underline mb-2 text-yellow-400'>{ name }</h2>
        { children }
    </div>
    
  )
}
