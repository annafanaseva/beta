import { Chart } from "react-google-charts";
import Main from './assets/img/main.png';
import './App.css';

export const data = [
  ["Task", "Hours per Day"],
  ["Факт", 112],
  ["Осталось", 12],
];

export const options = {
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
            height={"300px"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
