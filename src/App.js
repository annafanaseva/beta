import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

import Main from './assets/img/main.png';
import Logo from './assets/img/logo.png';

import './App.css';

export const options = {
  legend: "none",
  pieSliceText: "value",
  pieSliceTextStyle: {
    color: '#fff',
    fontSize: 20,
  },
  tooltip: {
    textStyle: { color: '#3F2BBE', fontSize: 14 },
    showColorCode: true
  },
  'chartArea': {
    width: '80%', // make sure this is the same for the chart and control so the axes align right
    height: '80%'
  },
  is3D: true,
  backgroundColor: 'transparent',
  slices: {
    0: { color: "#3F2BBE" },
    1: { color: "#E15897" },
  },
};

const App = () => {
  const [actualAmount, setActualAmount] = useState(null);

  const API_URL = "http://progers2:5200/api/suppliers/efficiency";

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

  const data = [
    ["Label", "Sum"],
    ["Факт", actualAmount],
    ["Осталось", 230000000 - actualAmount],
  ];

  const daysLeftNewYear = () => {
    const date = new Date();
    const nextNewYearDate = new Date('December 31, 2024');
    const res = ((nextNewYearDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return Math.round(res);
  }

  return (
    <div className="app">
      <div className="app-background">
      </div>

      <div className="wrapper">
        <img className="wrapper-img" src={Main} />
        <div className="wrapper-text">
          <p>До WOW эффекта осталось: {daysLeftNewYear()} дней</p>

          {actualAmount !== null &&
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />}
        </div>
      </div>

      <div className='logo'>
        <img src={Logo} className="logo-img" />
      </div>
    </div>
  );
}

export default App;
