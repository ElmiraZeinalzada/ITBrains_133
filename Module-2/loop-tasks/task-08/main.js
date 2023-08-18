let text = prompt("Zehmet olmasa soyadinizi ve adinizi daxil edin:")
let reverse = '';
for (let i = text.length-1; i >= 0; i--) {
    reverse += text[i];
    
}
console.log(reverse);
