import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

import Main from './assets/img/wow.png';
import Logo from './assets/img/logo.png';

import './App.css';

const App = () => {
  const [actualAmount, setActualAmount] = useState(null);

  const API_URL = "https://fin.betapress.ru/api/suppliers/efficiency";
  const plan = 230000000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setActualAmount(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const percent = (Math.floor(actualAmount) / plan) * 100;

  const date = new Date();
  const nextNewYearDate = new Date('December 31, 2024');
  const daysLeftNewYear = Math.floor((nextNewYearDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);

  const options = {
    legend: "none",
    pieHole: 0.8,
    pieSliceText: "none",
    pieSliceBorderColor: 'transparent',
    pieSliceTextStyle: {
      color: '#fff',
      fontSize: 20,
    },
    tooltip: {
      textStyle: { color: '#3F2BBE', fontSize: 14 },
      showColorCode: true
    },
    'chartArea': {
      width: '100%', // make sure this is the same for the chart and control so the axes align right
      height: '100%'
    },
    backgroundColor: 'transparent',
    slices: {
      0: { color: "#D22876" },
      1: { color: "#fff" },
    },
  };

  const data = [
    ["Label", "Sum"],
    ["Выполнено", actualAmount],
    ["Осталось", plan - actualAmount],
  ];

  return (
    <div className="app">
      <div className="app-background">
      </div>

      <div className="wrapper">
        <img className="wrapper-img" alt='wow effect' src={Main} />

        {(actualAmount !== null && actualAmount !== 0) ?
          <div className="wrapper-text">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />

            <div className="chart-text">
              <p className="chart-text-info">{'выполнено ' + (actualAmount / 1000000).toFixed(3) + ' млн'}</p>
              <p className="chart-text-main">{percent.toFixed(2) + ' %'}</p>
              <p className="chart-text-info">{'осталось ' + (plan / 1000000 - actualAmount / 1000000).toFixed(3) + ' млн'}</p>
              <p className="chart-text-info">{daysLeftNewYear + ' дней'}</p>
            </div>
          </div>
          : (
            <p className="chart-text-info">Данные обновляются</p>
          )
        }
      </div>

      <div className='logo'>
        <img alt='logo' src={Logo} className="logo-img" />
      </div>
    </div>
  );
}

export default App;
