'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import 'chart.js/auto'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PolarArea, Radar } from 'react-chartjs-2'
import Image from 'next/image'

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});
const YearGraph = () => {
    
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
        axios.get("http://127.0.0.1:8000/end_year/")
        .then((response) => {
            const labels = response.data.map((item) => item.end_year);
            const data = response.data.map((item) => item.count);
            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Dynamic Line Chart',
                        data: data,
                        fill: false,
                        borderColor: 'rgba(180, 150, 222)',
                        
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
    <div className="bg-emerald-200 m-1 p-10 rounded-md justify-center mx-auto items-center w-11/12">
        <div className="flex justify-between">
            <h1 className="text-xl">Year Chart Overview</h1>
            <div className="p-1 rounded-full hover:bg-indigo-100">
                <Image src="/dot.png" alt="dot" width="24" height="24" />
            </div>
            
        </div>
        <Line data={chartData} />
    </div>
  )
}

export default YearGraph