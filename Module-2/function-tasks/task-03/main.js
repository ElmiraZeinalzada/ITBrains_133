let rubl = +prompt("Hesabinizdaki rubl miqdari:")
let dollar = +prompt("Hesabinizdaki dollar miqdari:")

function converter(rubl,dollar) {
    let result = rubl + (dollar*75)
    console.log(`Bütün depozitlər üzrə məbləğ: ${result} rubl`);
}
converter(rubl,dollar)