let text = prompt("Zehmet olmasa metn daxil edin:")
for (let i = 0; i <= text.length-1; i++) {
    if (isNaN(text[i])) {
        console.log("Metnde reqem yoxdur!");
    }else{
        console.log("Metnde reqem var!");
    }
    
}