import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
import { FaCar } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaBuilding } from "react-icons/fa6";
import { SiTestcafe } from "react-icons/si";
import '../../Style/Calendar/dashboard.css';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function Home() {
    const [counts, setCounts] = useState({});
    const [visitsCounts, setVisitsCounts] = useState({});
    const [job_type, setJob_type] = useState({});

    const getCurrentMonthName = () => {
        const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
            "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        const now = new Date();
        return monthNames[now.getMonth()];
    };

    useEffect(() => {
        
        axios.get('http://localhost:8080/counts')
        .then(response => {
            setCounts(response.data);
        })
        .catch(error => {
            console.error('Error fetching counts:', error);
        });
         
        
        axios.get('http://localhost:8080/visits')
        .then(response => {
            console.log('Visits Counts Data:', response.data); // Debugging
            setVisitsCounts(response.data);
        })
        .catch(error => {
            console.error('Error fetching visits counts:', error);
        });

        axios.get('http://localhost:8080/jobs')
            .then(response => {
                setJob_type(response.data);
            })
            .catch(error => {
                console.error('Error fetching job counts:', error);
            });
    }, []);

    
    const visitData = {
        labels: Object.keys(visitsCounts),
        datasets: [
            {
                data: Object.values(visitsCounts),
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
        ],
    };

    const vc = {
        labels: Object.keys(job_type),
        datasets: [
            {
                data: Object.values(job_type),
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            datalabels: {
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label}\n${value.toFixed(2)}%`;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 15,
                },
                align: 'center',
                anchor: 'center',
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`
                }
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        radius: 150, 
        cutout: '25%', 
        hoverOffset: 20, 
        elements: {
            arc: {
                borderWidth: 5, // Border width for the arcs     
                          
            }
        }
    };
    

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3 className='titledashboard'>SUMMARY OF THE MONTH: {getCurrentMonthName()}</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>UNITS</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>{counts.units || 0}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ITEMS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>{counts.items || 0}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>{counts.customers || 0}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>EMPLOYEES</h3>
                        <BsPersonVcardFill className='card_icon' />
                    </div>
                    <h1>{counts.employees || 0}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>VEHICLE</h3>
                        <FaCar className='card_icon' />
                    </div>
                    <h1>{counts.vehicles || 0}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>JOBS IN {getCurrentMonthName()}</h3>
                        <BiDetail className='card_icon' />
                    </div>
                    <h1>{counts.jobs || 0}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>USER GROUPS</h3>
                        <HiMiniUserGroup className='card_icon' />
                    </div>
                    <h1>{counts.usergroups || 0}</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>SITE VISITS IN {getCurrentMonthName()}</h3>
                        <FaBuilding className='card_icon' />
                    </div>
                    <h1>{counts.visits || 0}</h1>
                </div>

            </div>
            

            <div className='chart-container'>
                
                <div className='chart-inner'>
                    <h3 className='pieTopic'>NO OF SITE VISITS: {getCurrentMonthName()} </h3>
                    <Pie data={visitData} options={options} />
                    <SiTestcafe className='img1'/>
                </div>

                <div className='chart-inner'>
                    <h3 className='pieTopic2'>NO OF JOBS: {getCurrentMonthName()}</h3>
                    <Pie data={vc} options={options} />
                    <BiDetail className='img2' />
                </div>
            </div>
        </main>
    );
}

export default Home;
