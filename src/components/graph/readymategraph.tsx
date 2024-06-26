'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import 'chart.js/auto'
import dynamic from 'next/dynamic'
import axios from 'axios'

const ChartComponent = ({chartType}) => {
    switch(chartType) {
        case 'Bar':
            return dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {ssr: false});
        case 'Line':
            return dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {ssr: false});
        case 'Radar':
            return dynamic(() => import('react-chartjs-2').then((mod) => mod.Radar), {ssr: false});
        case 'PolarArea':
            return dynamic(() => import('react-chartjs-2').then((mod) => mod.PolarArea), {ssr: false});
        default:
            return dynamic(() => import('react-chartjs-2').then((mod)=>mod.Bar), {ssr: false});
    }
}

const ReadyMateGraph = ({barName, chartType, address}) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: barName,
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
                
            },
        ],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/${address}`)
        .then((response) => {
            const labels = response.data.map((item) => item.address);
            const data = response.data.map((item) => item.count);
            
            const datasetName = response.data.length > 0 ? response.data[0].datasetName : 'Default Dataset Name';
            const borderColors = data.map(() => getRandomColor());
            const backgroundColors = data.map(() => getRandomColor());
            
            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: datasetName,
                        data: data,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1,
                    },
                ],
            });
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setError('Error fetching data');
            setLoading(false);
        });
    }, [barName, address]);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>
    }
    const DynamicChart = ChartComponent({chartType});
    return (
        <div>
            <h1>BlackCoffer Datasets {barName} for {address.charAt(0).toUpperCase()+address.slice(1)}: </h1>
            <DynamicChart data={chartData} />
            <div>
                <h2>Countries in {address.charAt(0).toUpperCase() + address.slice(1)}:</h2>
                <ul>
                    {chartData.labels.map((address, index) => (
                        <li key={index}>{address}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export default ReadyMateGraph;