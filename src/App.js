import { useState } from 'react';
import Filter from './components/Filter';
import Payment from './components/Payment';
import Form from './components/Form';
import './App.css';

function App() {
  const listYear = ['2021', '2022', '2023', '2024'];
  const listMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [currentYear, setCurrentYear] = useState('2021');

  const [isAdding, setAddingStatus] = useState(false);

  const [payment, setPayment] = useState([
    {
      date: {year: '2021', month: 'Jan', day: '23'},
      title: "Some drinks",
      amount: 100000
    },
    {
      date: {year: '2022', month: 'Feb', day: '2'},
      title: "Some books",
      amount: 50000
    }
  ]);

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
        {
          payment.filter((value) => value.date.year === currentYear)
                .map((value, index)=><Payment key={index} data={value}/>)
        }
      </div>
    </div>
  );
}

export default App;
