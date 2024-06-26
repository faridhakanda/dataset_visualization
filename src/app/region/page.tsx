'use client'
import ReadyMateGraph from '@/components/graph/readymategraph'
import RegionGraph from '@/components/graph/regiongraph'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Region = () => {
  const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/region/");
                setData(response.data);
            } catch(error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
  return (
    <div className="mt-4">
        <div className="sm:mt-14 md:mt-14 mt-5">
          <RegionGraph />
        </div>
        <div className="text-start w-9/12 mx-auto p-4">
            {
                data.map(item => {
                    return (
                        <div className="text-start mx-auto">
                            <div className="flex justify-between bg-slate-100 rounded-md m-1 p-4">
                                <h1 className="">{item.region}</h1>
                                <h1>{item.count}</h1>
                            </div>
                        </div>
                        
                    )
                })
            }
        
        </div>
        
    </div>
  )
}

export default Region