function isLucky(params) {
    let value = String(params)
    let one = Number(value[0])
    let two = Number(value[1])
    let three = Number(value[2])
    let four = Number(value[3])
    let five = Number(value[4])
    let six = Number(value[5])
    let first = (one + two + three)
    let last = (four + five + six)
    if (first == last) {
        return true;
    } else {
        return false;
    }
}

console.log(isLucky(234801));
console.log(isLucky(234812));