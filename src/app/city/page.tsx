import CityGraph from '@/components/graph/citygraph'
import React from 'react'

const City = () => {
  return (
    <div className="mt-4 text-center justify-center mx-auto">
      <div></div>
      <div className="sm:mt-14 md:mt-14 mt-5 text-center justify-center items-align mx-auto px-auto">
        <CityGraph />
      </div>
        
    </div>
  )
}

export default City