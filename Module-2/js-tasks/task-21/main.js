let data = prompt("Zehmet olmasa soyad,ad ve ata adinizi daxil edin");//zeynalzade elmira mehdi
let space = data.slice(data.indexOf(" ") + 1);
let surname = data.slice(0, data.indexOf(" "))
let name = data.slice(data.indexOf(" "),data.lastIndexOf(" "))
let secondName=data.slice(data.lastIndexOf(" "))

console.log(`${surname} ${name[1]}.${secondName[1]}`);

// let list = data.split(" ")
// console.log(`${list[0]} ${list[1][0]}.${list[2]}`);