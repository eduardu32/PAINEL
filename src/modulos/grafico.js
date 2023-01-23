import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const ProductionChart = () => {
    const [produção, setProdução] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(data => {
            setProdução(data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

 const data =[
  ["Dia", "Turno A", "Turno B", "Turno C", "Média Móvel"],
  ["Dia 1", 500, 900, 925, 910],
  ["Dia 2", 900, 925, 975, 925],
  ["Dia 3", 925, 950, 1000, 940],
  ["Dia 4", 950, 975, 1025, 955],
  ["Dia 5", 975, 1000, 1050, 970],
  ["Dia 6", 1000, 1025, 1075, 985],
  ["Dia 7", 1025, 1050, 1100, 1000]
]
console.log(typeof(produçao));
  const options = {
    explorer: {
        axis: 'horizontal',
        keepInBounds: true,
        maxZoomIn: 4.0
    },
    animation: {
         duration: 1000,
        easing: 'in',
        startup: true,
    },
    pointSize: 5,
    titleTextStyle: {color :'000'},
    chartArea: {
        width: '74%',
        left: '10%'
    },
    legend: {textStyle: { color: '000' }},
    backgroundColor : '#dedede',
    title: 'PRODUÇÃO DIARIA NOS ULTIMOS 7 DIAS',
    hAxis: {title: 'Dia',  titleTextStyle: {color: '000'}},
    vAxis: {format: 'decimal', textStyle: { color: '000' }},
    height: 400,
    colors: ['#008eff', '003165', '#000b18', '4c4c4c'],
    series: {
      
      3: {
        pointSize:1,
        type: 'line',
        curveType: 'function',
      }
    }
  }

  return (
    <Chart
      width={'600px'}
      height={'400px'}
      chartType="ColumnChart"
      data={data}
      options={options}
    />
  );
}
export default ProductionChart;