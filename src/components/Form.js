import { useState } from "react";
import "./Form.css";

export default function Form({onAdding, onCanceling, init, submitTitle}){
    const [data, setData] = useState(init);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setData(init);
        onAdding(data);
        onCanceling();
    } 
    return (
        <form className="add_form" onSubmit={handleSubmit}>
            <div className="input_wrap">
                <label htmlFor="name">Name: </label>
                <input placeholder="Enter name here" id="name" name="name" value={data.name} onChange={handleChange}/>
            </div>
            <div className="input_wrap">
                <label htmlFor="amount">Amount: </label>
                <input placeholder="Enter amount here" id="amount" name="amount" value={data.amount} onChange={handleChange}/>
            </div>
            <div className="input_wrap">
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" name="date" value={data.date} onChange={handleChange}/>
            </div>
            <div className="form_action_wrap">
                <button type="submit">{submitTitle}</button>
                <button onClick={onCanceling} type="cancel">CANCEL</button>
            </div>
        </form>
    );
}
