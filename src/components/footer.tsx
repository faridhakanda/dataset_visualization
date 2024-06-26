import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="bg-gray-700  pt-10  h-96 sm:w-full md:w-full text-center text-slate-100 p-4 h-48 lg:ml-56 xl:ml-64 2xl:ml-64">
      <div className="flex  justify-around">
        <div className="text-start w-56">
          <h1>BlackCoffer Ltd.</h1>
          <p>BlackCoffer is one the of leading software company in India.</p>
        </div>
        <div>
          <div className="text-start">
            <h1 className="text-xl">Services</h1>
            <ul className="flex flex-col text-start">
              <li>App Development</li>
              <li>eCommerce</li>
              <li>Game Development</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Data Science</li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="flex gap-4 p-8 text-center items-center justify-center">
        <Image src="/Github.png" alt="github" width="32" height="32" />
        <Image src="/Linkedin.png" alt="linkedin" width="32" height="32" />
        <Image src="/X.png" alt="x" width="32" height="32" />
        <Image src="/Youtube.png" alt="youtube" width="32" height="32" />
      </div>
      <div className="pt-10">
          <h1>&copy; All Right Reserved 2024.</h1>
      </div>
    </div>
  )
}

export default Footer