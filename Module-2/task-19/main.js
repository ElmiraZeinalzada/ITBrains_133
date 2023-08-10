let price = prompt("Zehmet olmasa <<560.90>> formatinda qiymet daxil edin");
let dot = price.slice(price.indexOf(".") + 1)
let num1 = price.slice(0, price.indexOf("."))
let num2 = dot.slice(dot.indexOf(".") + 1)

console.log(`${num1} manat ${num2} qepik`);