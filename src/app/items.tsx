import CityGraph from '@/components/graph/citygraph'
import CountryGraph from '@/components/graph/country'
import IntensityGraph from '@/components/graph/intensity'
import LikelihoodGraph from '@/components/graph/likelihood'
import RegionGraph from '@/components/graph/regiongraph'
import RelevanceGraph from '@/components/graph/relevance'
import YearGraph from '@/components/graph/year'
import TopicGraph from '@/components/graph/topicgraph'
import React from 'react'
import SectorGraph from '@/components/graph/sectorgraph'

const Items = () => {
  return (
    <div className="flex">
      <div className="m-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 2xl:gap-1">
        <IntensityGraph />
        <LikelihoodGraph />
        <RelevanceGraph />
        <YearGraph />
        <CountryGraph />
        <TopicGraph />
        <RegionGraph />
        <CityGraph />
        <SectorGraph />
      </div>
    </div>
  )
}

export default Items