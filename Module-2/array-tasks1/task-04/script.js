// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın.
// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.
let numbers = prompt("Zehmet olmasa vergulle ayrilmis 5 eded daxil edin:")

let arr = numbers.split(",")
console.log(arr);
console.log(Math.min(...arr))
