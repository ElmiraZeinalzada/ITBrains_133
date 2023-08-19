function isvalidnumber(number) {
    if (number.length == 12 && number[0] == "+" && number[1] == 7) {
        console.log(true);
    }else{
        console.log(false);
    }
        return number;
}
isvalidnumber("+71234567890")