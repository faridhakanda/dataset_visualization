'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-chartjs-2'
import 'chart.js/auto'
import Image from 'next/image'

const Radar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Radar), {
    ssr: false,
});
const LikelihoodGraph = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Dynamic Bar Chart',
                data: [],
                fill: false,
                borderColor: 'rgba(75, 192, 192)',
                
                tension: 0.1,
            },
        ],
    });
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/likelihood/")
        .then((response) => {
            const labels = response.data.map((item) => item.likelihood);
            const data = response.data.map((item) => item.count);
            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Dynamic Line Chart',
                        data: data,
                        fill: false,
                        borderColor: 'rgba(75, 192, 192)',
                        
                        tension: 0.1
                    },
                ],
            });
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
        });
    }, []);
  return (
    <div className="bg-slate-100 m-1 p-10 text-center justify-center items-center mx-auto rounded-md w-11/12">
        <div className="flex justify-between">
            <h1 className="text-xl">Likelihood Visualization</h1>
            <div className="p-1 rounded-full hover:bg-indigo-100">
                <Image src="/dot.png" alt="dot" width="24" height="24" />
            </div>
            
        </div>
        <Radar className="text-center justify-center items-center mx-auto px-auto" data={chartData} />
    </div>
  )
}

export default LikelihoodGraph;