import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ChartComponent.module.css';


export const ChartComponent = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/returns.json') // Fetch the JSON file from the public folder
            .then(response => response.json())
            .then(jsonData => {
                setData(jsonData.data.combined); // Assuming 'combined' is the key containing the data array
            })
            .catch(error => console.error(error));
    }, []);
    useEffect(() => {
        if (data.length > 0) {
            const chartOptions = {
                layout: {
                    textColor: 'black',
                    // set chart background color to transparent so we can see the elements below
                    background: { type: 'solid', color: 'transparent' },

                },
                width: 600,
                height: 600
            };
            const chart = createChart('chart-container', chartOptions);
            const lineSeries = chart.addLineSeries();
            lineSeries.setData(data.map(item => ({ time: item.date, value: item.cumsum })));

 
            // Change the color of the line
            lineSeries.applyOptions({
                color: 'red',
                lineWidth: 1, // Optional: Change the line width

            });
        }
    }, [data]);


    return (
        
            <div id="chart-container" className={styles.chart_container}>
                    <div className={styles.brandlogo}>
                        <img src="https://maticalgos.com/wp-content/uploads/2022/01/logo_white-172x46.png" alt="" />
                    </div>
            </div>



    )
};
