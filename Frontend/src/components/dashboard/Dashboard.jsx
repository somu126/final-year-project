import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import * as XLSX from 'xlsx';

const Dashboard = () => {
    const [chartType, setChartType] = useState('');
    const [chartData, setChartData] = useState(null);
    const [chartGenerated, setChartGenerated] = useState(false); // State variable to track if chart is generated

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setChartData(parsedData);
        };
        reader.readAsArrayBuffer(file);
    };

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
    };

    const handleGenerateChart = () => {
        if (!chartData) {
            alert('Please upload an Excel file.');
            return;
        }

        if (chartType === 'pie' || chartType === 'bar' || chartType === 'line' || chartType === 'radar' || chartType === 'doughnut') {
            if (!chartGenerated) { // Check if chart is not already generated
                generateChart(chartType);
                setChartGenerated(true); // Set chartGenerated to true after generating the chart
            } else {
                alert('Chart already generated.');
            }
        }
    };

    const generateChart = (chartType) => {
        const ctx = document.getElementById('myChart').getContext('2d');

        const labels = chartData.map((item) => item['Make']);
        const data = chartData.map((item) => item['Price']);

        new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Price',
                    data: data,
                    backgroundColor: chartType === 'bar' ? 'rgba(54, 162, 235, 0.2)' : [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: chartType === 'bar' ? 'rgba(54, 162, 235, 1)' : [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div>
            <section className='py-5 hero-bg' style={{ height: '30vh' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='my-2'>
                                <h2 className='text-white'>Welcome</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 text-center">
                            <div className="my-2">
                                <div className="d-flex justify-content-center">
                                    <div className="py-0">
                                        <select
                                            className="form-control w-100"
                                            value={chartType}
                                            onChange={handleChartTypeChange}
                                        >
                                            <option value="">Choose Chart</option>
                                            <option value="bar">Bar Chart</option>
                                            <option value="pie">Pie Chart</option>
                                            <option value="line">Line Chart</option>
                                            <option value="radar">Radar Chart</option>
                                            <option value="doughnut">Doughnut Chart</option>
                                        </select>
                                    </div>
                                    <div className="mx-3">
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleFileUpload}
                                            required
                                        />
                                    </div>
                                    <div className="mx-3">
                                        <button
                                            className="btn btn-primary px-5 py-1 rounded-pill"
                                            onClick={handleGenerateChart}
                                        >
                                            Generate Chart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                            <div className='my-2'>
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Dashboard;
