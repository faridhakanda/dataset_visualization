'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-chartjs-2'
import Image from 'next/image'

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});
const IntensityGraph = () => {
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
        axios.get("http://127.0.0.1:8000/intensity/")
        .then((response) => {
            const labels = response.data.map((item) => item.intensity);
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
    <div className="bg-orange-100 m-1 p-10 text-center justify-center items-center mx-auto rounded-md w-11/12">
        <div className="flex justify-between">
            <h1 className="text-xl">Intensity Overview</h1>
            <div className="rounded-full p-1 hover:bg-indigo-100">
                <Image src="/dot.png" alt="dot" width="24" height="24" />
            </div>
            
        </div>
        
        <Line data={chartData} />
    </div>
  )
}

export default IntensityGraph;