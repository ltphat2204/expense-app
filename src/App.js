import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Payment from './components/Payment';
import Form from './components/Form';
import Calculate from './optimization/CalculateExpense';
import Stat from './components/Stat';
import GetNumberOfMonth from './optimization/GetNumberOfMonth';
import './App.css';

function App() {
  const listYear = ['2021', '2022', '2023', '2024'];
  const listMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [currentYear, setCurrentYear] = useState('2021');

  const [isAdding, setAddingStatus] = useState(false);

  const [payment, setPayment] = useState([]);

  const [stat, setStat] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  useEffect(()=>{
    setStat(Calculate(payment, listMonth, currentYear));
  }, [currentYear, payment,]);

  const handleAddPayment = value => {
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

  const handleDeletePayment = index => {
    payment.splice(index, 1);
    setPayment([...payment]);
  }

  const handleEditPayment = value => {
    const [y, m, d] = value.date.split('-');

    payment.splice(editIndex, 1);

    setPayment([
      ...payment,
      {
        date: {year: y, month: listMonth[parseInt(m)], day: d},
        title: value.name,
        amount: value.amount
      }
    ]);
    setEditIndex(null);
  }

  return (
    <div className="App">
      <div className="add_container">
        {
          isAdding ?
          <Form onAdding={handleAddPayment} onCanceling={()=>setAddingStatus(false)} init={{"name": "", "amount": "", "date": ""}} submitTitle="ADD"/> : 
          <div onClick={()=>setAddingStatus(true)} className="add_button">ADD NEW EXPENSE</div>
        }
      </div>
      <div className="main_container">
        <Filter listOption={listYear} onChange={setCurrentYear} currentValue={currentYear} title="Filter by year"/>
        <Stat data={stat} listMonth={listMonth}/>
        {
          payment.filter((value) => value.date.year === currentYear)
                .map((value, index)=><Payment key={Math.floor(Math.random() * 10000)} data={value} onClick={()=>setEditIndex(payment.indexOf(value))} onDelete={()=>handleDeletePayment(payment.indexOf(value))}/>)
        }
        {
          editIndex !== null && 
          <div className="edit_container">
            <div className="edit_wrap">
              <Form onAdding={handleEditPayment} 
                    onCanceling={()=>setEditIndex(null)} 
                    init={{
                    name: payment[editIndex].title, 
                    amount: payment[editIndex].amount, 
                    "date": `${payment[editIndex].date.year}-${GetNumberOfMonth(listMonth, payment[editIndex].date.month)}-${payment[editIndex].date.day}`}} 
                    submitTitle="SAVE"
              />
            </div>
            
          </div>
        }
      </div>
    </div>
  );
}

export default App;
