import RelevanceGraph from '@/components/graph/relevance'
import React from 'react'

const Relevance = () => {
  return (
    <div className="mt-4 text-center justify-center mx-auto">
        <div></div>
        <div className="text-center justify-center sm:mt-14 md:mt-14 mt-5 mx-auto">
          <RelevanceGraph />
        </div>
        
    </div>
  )
}

export default Relevance