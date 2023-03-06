export default function Calculate(listPayment, listMonth, currentYear){
    const result = [];
    listMonth.forEach(element => {
        const paymentInMonth = listPayment.filter(value => value.date.month === element && value.date.year === currentYear)

        result.push(paymentInMonth.reduce((prev, curr) => prev + curr.amount, 0));
    });
    return result;
}