function isIncludeLetter(x){
    for (let i = 0; i < x.length; i++){
        if (49 > x.charCodeAt(i) || x.charCodeAt(i) > 58){
            return true;
        }
    }
    return false;
}

export default function Validation(value){
    let message = "";
    if (!value.name){
        message += "Name is missed!";
    }
    if (!value.amount){
        message += "\nAmount is missed!";
    }
    if(isIncludeLetter(value.amount)){
        message += "\nInvalid amount!";
    }
    if (!value.date){
        message += "\nDate is missed!";
    }
    return message;
}