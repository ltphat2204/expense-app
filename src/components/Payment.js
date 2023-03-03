import './Payment.css';

export default function Payment({data}){
    return (
        <div className="payment_item">
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
    );
}