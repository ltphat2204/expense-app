import { ImBin } from 'react-icons/im';
import './Payment.css';

export default function Payment({data, onDelete, onClick}){
    return (
        <div className="payment_container">
            <div className="payment_item" onClick={onClick}>
                <div className="payment_left_wrap">
                    <div className="payment_date">
                        <div className="payment_month">{data.date.month}</div>
                        <div className="payment_year">{data.date.year}</div>
                        <div className="payment_day">{data.date.day}</div>
                    </div>
                    <div className="payment_title">{data.title}</div>
                </div>
                <div className="payment_amount">{`$ ${data.amount}`}</div>
            </div>
            <ImBin className="payment_delete" onClick={onDelete}/>
        </div>
    );
}