/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react';
import './App.scss';
import Chart from 'react-google-charts';
import { Line, Pie } from 'react-chartjs-2';
import Footer from '../Footer/Footer';
import data from '../../constants/constatnts';

const dataPart = JSON.parse(data)[0].columns;
const dataRes = [];
const dataTitles = [];
const dotCount = dataPart[0].length;
dataPart.map((item, index) => {
  dataTitles.push(item[0]);
  dataRes[0] = dataTitles;
});

let i = 1;
while (i <= dotCount) {
  dataRes[i] = [
    dataPart[0][i],
    dataPart[1][i],
    dataPart[2][i],
  ];
  i++;
}
// const realData = [
//   [
//     'Day',
//     'Guardians of the Galaxy',
//     'The Avengers',
//     'Transformers: Age of Extinction',
//   ],
//   [1, 37.8, 80.8, 41.8],
//   [2, 30.9, 69.5, 32.4],
//   [3, 25.4, 57, 25.7],
//   [4, 11.7, 18.8, 10.5],
//   [5, 11.9, 17.6, 10.4],
//   [6, 8.8, 13.6, 7.7],
//   [7, 7.6, 12.3, 9.6],
//   [8, 12.3, 29.2, 10.6],
//   [9, 16.9, 42.9, 14.8],
//   [10, 12.8, 30.9, 11.6],
//   [11, 5.3, 7.9, 4.7],
//   [12, 6.6, 8.4, 5.2],
//   [13, 4.8, 6.3, 3.6],
//   [14, 4.2, 6.2, 3.4],
// ];
// console.log(realData);
const dataset = [];
const colors = ['green', 'red', 'blue', 'yellow', 'pink'];
dataPart.map((item, index) => {
  if (index > 0) {
    dataset.push(
      {
        label: item[0],
        data: item.slice(1),
        fill: false,
        borderColor: colors[index],
        backgroundColor: colors[index],
        lineTension: 0.4,
        cubicInterpolationMode: 'default',
      },
    );
  }
});
const config = {
  labels: dataPart[0].slice(1).map(el => (new Date(el))),
  datasets: dataset,
};
const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Chart.js Line Chart',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true,
  },
  fill: false,
  scales: {
    xAxes: [{
      type: 'time',
      distribution: 'linear',
      bounds: 'data',
      ticks: {
        source: 'labels',
      },
      time: {
        displayFormats: {
          month: 'MMM YYYY',
        },
        minUnit: 'week',
      },
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date',
      },
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Page Views',
      },
    }],
  },
};

const App = () => (
  <div className="main_container">
    <Chart
      width="80%"
      height="80%"
      chartType="Line"
      loader={<div>Loading Chart!!!</div>}
      data={dataRes}
      options={{
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)',
        },
      }}
      rootProps={{ 'data-testid': '4' }}
    />
    <Line
      data={config}
      options={options}
      width={800}
    />
    <Footer />
  </div>
);

export default App;
