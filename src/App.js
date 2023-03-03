import { useState } from 'react';
import Filter from './components/Filter';
import Payment from './components/Payment';
import './App.css';

function App() {
  const listYear = ['2021', '2022', '2023', '2024'];
  const [currentYear, setCurrentYear] = useState('2021');
  const [payment, setPayment] = useState([
    {
      date: {year: 2021, month: 'Jan', day: 23},
      title: "Some drinks",
      amount: 100000
    },
    {
      date: {year: 2022, month: 'Feb', day: 2},
      title: "Some books",
      amount: 50000
    }
  ]);

  return (
    <div className="App">
      <div className="main_container">
        <Filter listOption={listYear} onChange={setCurrentYear} currentValue={currentYear} title="Filter by year"/>
        {
          payment.filter((value) => value.date.year === parseInt(currentYear))
                .map((value, index)=><Payment key={index} data={value}/>)
        }
      </div>
    </div>
  );
}

export default App;
