import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';


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

            const container = document.getElementById('container');
            const background = document.createElement('div');
            // place below the chart
            background.style.zIndex = -1;
            background.style.position = 'absolute';
            // set size and position to match container
            background.style.inset = '0px';
            background.style.backgroundImage = `url("https://maticalgos.com/wp-content/uploads/2022/01/logo_white-172x46.png")`;
            background.style.backgroundRepeat = 'no-repeat';
            background.style.backgroundPosition = 'left top ';
            background.style.opacity = '1';
            container.appendChild(background);

            chart.applyOptions({
                watermark: {
                    visible: true,
                    fontSize: 35,
                    horzAlign: 'right',
                    vertAlign: 'bottom',
                    color: 'gray',
                    text: 'MaticAlgos',
                },
            })
            // Change the color of the line
            lineSeries.applyOptions({
                color: 'red',
                lineWidth: 1, // Optional: Change the line width

            });
        }
    }, [data]);


    return (
        <Container className=''>
            <div id="chart-container">
                <div id='container'></div>
            </div>
        </Container>



    )
};
