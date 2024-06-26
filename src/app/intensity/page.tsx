'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import IntensityGraph from '@/components/graph/intensity'
import ReadyMateGraph from '@/components/graph/readymategraph'


const Intensity = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/intensity/")
                setData(response.data)
            } catch(error) {
                setError(error)
            }
        };
        fetchData();
    }, []);
  return (
    <div className="mt-4 text-center justify-center mx-auto">
        
        <div className="text-center items-align justify-center sm:mt-14 md:mt-14 mt-5 mx-auto">
            <IntensityGraph />
        </div>
        
        
    </div>
  )
}

export default Intensity