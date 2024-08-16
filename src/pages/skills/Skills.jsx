import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Habilidades.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
    id: 'centerText',
    afterDatasetsDraw(chart) {
        const { ctx, data, chartArea: { width, height } } = chart;
        ctx.save();
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        data.datasets.forEach((dataset, i) => {
            const { data: dataArray } = dataset;
            const total = dataArray[0];
            ctx.fillText(`${total}%`, width / 2, height / 2);
        });
    }
};

function Habilidades() {
    const data = [
        { label: "HTML & CSS", percent: 95, color: "#ff6384" },
        { label: "BOOTSTRAP", percent: 90, color: "#36a2eb" },
        { label: "JAVASCRIPT", percent: 85, color: "#ffce56" },
        { label: "MYSQL", percent: 70, color: "#4bc0c0" },
        { label: "PHP", percent: 90, color: "#9966ff" },
        { label: "PHOTOSHOP", percent: 90, color: "#ff9f40" }
    ];

    const renderChart = (percent, color) => {
        return {
            datasets: [
                {
                    data: [percent, 100 - percent],
                    backgroundColor: [color, "#e0e0e0"],
                    borderWidth: 1,
                },
            ],
            labels: ['Skill Level', 'Remaining'],
        };
    };

    return (
        <section className="habilidades" id="habilidades">
            <div className="contenedor-habi">
                <h2>Habilidades</h2>
                <div className="fila">
                    {data.map((item, index) => (
                        <div className="col" key={index}>
                            <div className="score">
                                <div className="box">
                                    <Doughnut
                                        data={renderChart(item.percent, item.color)}
                                        options={{
                                            cutout: '80%',
                                            plugins: {
                                                legend: {
                                                    display: false
                                                },
                                                centerText: {porcent: true}
                                            },
                                            maintainAspectRatio: false,
                                        }}
                                        plugins={[centerTextPlugin]} 
                                    />
                                    <h2>{item.label}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Habilidades;
