export default function GetNumberOfMonth(listMonth, month){
    const index = listMonth.indexOf(month) + 1;
    if (index < 10) {
        return '0' + index;
    }else{
        return index + '';
    }
}