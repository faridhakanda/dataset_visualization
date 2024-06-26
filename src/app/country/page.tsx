'use client'
import CountryGraph from '@/components/graph/country'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = () => {
  const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/country/");
                setData(response.data);
            } catch(error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
  return (
    <div className="mt-4 text-center justify-center mx-auto">
        
        <div className="sm:mt-14 md:mt-14 mt-5 text-center justify-center mx-auto">
          <CountryGraph/>
        </div>
        <div className="text-start w-9/12 mx-auto p-4">
            {
                data.map(item => {
                    return (
                        <div className="text-start mx-auto">
                            <div className="flex justify-between bg-slate-100 rounded-md m-1 p-4">
                                <h1 className="">{item.country}</h1>
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

export default Country