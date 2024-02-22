import { Chart } from "react-google-charts";
import Main from './assets/img/main.png';
import Logo from './assets/img/logo.png';
import './App.css';

export const data = [
  ["Label", "Sum"],
  ["Факт", 200],
  ["Осталось", 30],
];

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

          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>

      <div className='logo'>
        <img src={Logo} className="logo-img" />
      </div>
    </div>
  );
}

export default App;
