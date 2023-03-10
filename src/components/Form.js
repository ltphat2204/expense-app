import { useState } from "react";
import Validation from "../optimization/Validation";
import "./Form.css";

export default function Form({onAdding, onCanceling, init, submitTitle}){
    const [data, setData] = useState(init);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const errorMessage = Validation(data);

        if (errorMessage){
            setError(errorMessage);
        }else{
            setError("");
            setData(init);
            onAdding(data);
            onCanceling();
        }
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
            {
                error && 
                <div className="input_wrap">
                    <div className="form_error">Error: {error}</div>
                </div>
            }
            <div className="form_action_wrap">
                <button type="submit">{submitTitle}</button>
                <button onClick={onCanceling} type="cancel">CANCEL</button>
            </div>
        </form>
    );
}
