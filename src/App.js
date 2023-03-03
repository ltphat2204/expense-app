import { useState } from 'react';
import Filter from './components/Filter';
import './App.css';

function App() {
  const listYear = ['2021', '2022', '2023', '2024'];
  const [currentYear, setCurrentYear] = useState('2021');

  return (
    <div className="App">
      <div className="main_container">
        <Filter listOption={listYear} onChange={setCurrentYear} currentValue={currentYear} title="Filter by year"/>
      </div>
    </div>
  );
}

export default App;
