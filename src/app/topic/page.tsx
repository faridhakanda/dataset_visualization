'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TopicGraph from '@/components/graph/topicgraph'

const About = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/topic/");
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
            <TopicGraph />
        </div>
        <div className="text-start w-9/12 mx-auto p-4">
            {
                data.map(item => {
                    return (
                        <div className="text-start mx-auto">
                            <div className="flex justify-between bg-slate-100 rounded-md m-1 p-4">
                                <h1 className="">{item.topic}</h1>
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

export default About

