import Main from './assets/img/main.png';
import './App.css';

function App() {

  const daysLeftNewYear = () => {
    const date = new Date();
    const nextNewYearDate = new Date('December 31, 2024');
    const res = ((nextNewYearDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return Math.round(res);
  }

  console.log(daysLeftNewYear());
  return (
    <div className="app">
      <div className="app-background">
      </div>
      <div className="wrapper">
        <img className="wrapper-img" src={Main} />
        <div className="wrapper-text">
          <p>До WOW эффекта осталось: {daysLeftNewYear()} дней</p>
        </div>
      </div>
    </div>
  );
}

export default App;
