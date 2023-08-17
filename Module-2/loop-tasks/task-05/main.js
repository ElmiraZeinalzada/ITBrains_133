let num = +prompt("Zehmet olmasa eded daxil edin:")
let i = 100
let sum = 0
while (i < 1000) {
    if (i % num == 0){
        sum += i
        console.log(sum);
    }
    i++
}
