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

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function Home() {
    const [counts, setCounts] = useState({});
    const [designationCounts, setDesignationCounts] = useState({});
    const [vehicle_type, setVehicle_type] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8081/counts')
            .then(response => {
                setCounts(response.data);
            })
            .catch(error => {
                console.error('Error fetching counts:', error);
            });
        
        axios.get('http://localhost:8081/designationCounts')
            .then(response => {
                setDesignationCounts(response.data);
            })
            .catch(error => {
                console.error('Error fetching designation counts:', error);
            });

        axios.get('http://localhost:8081/vehicles')
            .then(response => {
                setVehicle_type(response.data);
            })
            .catch(error => {
                console.error('Error fetching vehicles counts:', error);
            });
    }, []);

    const total = counts.units + counts.items;
    const unitPercentage = total > 0 ? (counts.units / total) * 100 : 0;
    const itemPercentage = total > 0 ? (counts.items / total) * 100 : 0;

    const data = {
        labels: ['Sales', 'Free'],
        datasets: [
            {
                data: [unitPercentage, itemPercentage],
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    const empData = {
        labels: Object.keys(designationCounts),
        datasets: [
            {
                data: Object.values(designationCounts),
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
            },
        ],
    };

    const Vehicle_type = {
        labels: Object.keys(vehicle_type),
        datasets: [
            {
                data: Object.values(vehicle_type),
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
                <h3>SUMMARY</h3>
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
                        <h3>JOBS</h3>
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
                        <h3>SITE VISITS</h3>
                        <FaBuilding className='card_icon' />
                    </div>
                    <h1>{counts.sites || 0}</h1>
                </div>

            </div>
            

            <div className='chart-container'>
                <div className='chart-inner'>
                    <h3 className='pieTopic3'>Production Distribution</h3>
                    <Pie data={data} options={options} />
                    <img src="https://img.icons8.com/ios/50/000000/air-conditioner.png" className='img' />
                </div>

                <div className='chart-inner'>
                    <h3 className='pieTopic'>Employee Designation </h3>
                    <h3 className='pieTopic1'>Distribution</h3>
                    <Pie data={empData} options={options} />
                    <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-Employee-business-management-flatart-icons-outline-flatarticons.png" className='img1'/>
                </div>

                <div className='chart-inner'>
                    <h3 className='pieTopic2'>Vehicle Distribution</h3>
                    <Pie data={Vehicle_type} options={options} />
                    <img src="https://img.icons8.com/pastel-glyph/64/FFFFFF/car--v2.png" className='img2' />
                </div>
            </div>
        </main>
    );
}

export default Home;
