let n = prompt("Zehmet olmasa eded daxil edin:")
let bolen = 0
for (i = 0; i <= n; i++) {
    if (n % i == 0) {
        bolen++
    }
}
if (bolen > 2) {
    alert("Eded murekkebdir");
} else {
    alert("Eded sadedir");
}