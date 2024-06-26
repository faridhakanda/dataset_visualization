import React from 'react'
import Link from 'next/link'
//import About from '@/app/sector/topic/page'


const Navbar = () => {
  const topics = [
    {
      id: 0,
      title: 'DashBoard',
      url: '/'
    },
    {
      id: 1, 
      title: 'Intensity', 
      url: '/intensity'
    },
    {
      id: 2,
      title: 'Likelihood',
      url: '/likelihood'
    },
    {
      id: 3,
      title: 'Relevance',
      url: '/relevance'
    },
    {
      id: 4,
      title: 'Year',
      url: '/year'
    },
    {
      id: 5,
      title: 'Country',
      url: '/country'
    },
    {
      id: 6,
      title: 'Topic',
      url: '/topic'
    },
    {
      id: 7,
      title: 'Region',
      url: '/region'
    },
    {
      id: 8,
      title: 'City',
      url: '/city'
    },
    
  ];
  return (
    <div className="float-left animate-pulse shadow-xl lg:w-56 xl:w-64 2xl:w-64 h-screen sm:hidden md:hidden lg:visible xl:visible 2xl:visible">
        <div className="mt-8 p-2 text-start ml-12 text-xl">
          <div className="">
            {
              topics.map((nav_list) => {
                  return (
                      <Link className="flex active:bg-violet-200 hover:bg-slate-300 rounded-md p-2" key={nav_list.id} href={nav_list.url}>{nav_list.title}</Link>
                  )
              })
            }
          </div>
          
          
        </div>
      
    </div>
  )
}

export default Navbar