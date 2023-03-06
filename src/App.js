import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Payment from './components/Payment';
import Form from './components/Form';
import Calculate from './optimization/CalculateExpense';
import Stat from './components/Stat';
import './App.css';

function App() {
  const listYear = ['2021', '2022', '2023', '2024'];
  const listMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [currentYear, setCurrentYear] = useState('2021');

  const [isAdding, setAddingStatus] = useState(false);

  const [payment, setPayment] = useState([]);

  const [stat, setStat] = useState([]);

  useEffect(()=>{
    setStat(Calculate(payment, listMonth, currentYear));
  }, [currentYear, payment,]);

  const handleAddPayment = (value) =>{
    const [y, m, d] = value.date.split('-');

    setPayment([
      ...payment,
      {
        date: {year: y, month: listMonth[parseInt(m)], day: d},
        title: value.name,
        amount: value.amount
      }
    ]);
  }

  return (
    <div className="App">
      <div className="add_container">
        {
          isAdding ?
          <Form onAdding={handleAddPayment} onCanceling={()=>setAddingStatus(false)}/> : 
          <div onClick={()=>setAddingStatus(true)} className="add_button">ADD NEW EXPENSE</div>
        }
      </div>
      <div className="main_container">
        <Filter listOption={listYear} onChange={setCurrentYear} currentValue={currentYear} title="Filter by year"/>
        <Stat data={stat} listMonth={listMonth}/>
        {
          payment.filter((value) => value.date.year === currentYear)
                .map((value, index)=><Payment key={Math.floor(Math.random() * 10000)} data={value}/>)
        }
      </div>
    </div>
  );
}

export default App;
