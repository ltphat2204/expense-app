import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import './Filter.css';

export default function Filter({listOption, onChange, currentValue, title}){
    const [status, setStatus] = useState('closed');

    const handleChange = (value) => {
        onChange(value);
        setStatus('closed');
    }

    return (
        <div className="filter_container">
            <div className="filter_title">{title}</div>
            <div className={`filter_selection_wrap ${status}`}>
                <div onClick={() => setStatus(status === 'closed' ? 'open' : 'closed')} className="filter_options">
                    {currentValue} 
                    <span className="filter_arrow">
                        {status === 'closed' ? <GoTriangleDown/> : <GoTriangleUp/>}
                    </span>
                </div>
                <ul className="filter_options_container">
                    {
                        listOption.map((value, index) => 
                            <li key={index} onClick={() => handleChange(value)} className="filter_options">{value}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}