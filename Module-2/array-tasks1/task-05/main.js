// Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
// '32, 31, 34, 36, 31' mətni verilmişdir;
// İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)

let string = "32,31,34,36,31"
console.log(string);
let arr = string.split(",").join(";")
console.log(arr);