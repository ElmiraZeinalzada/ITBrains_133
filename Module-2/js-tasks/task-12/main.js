let fullName = prompt("Zehmet olmasa adinizi <<Ad Soyad>> formatinda daxil edin");
let FN = fullName.split(" ");
let reverse = FN[1] + " " + FN[0];
console.log(reverse)