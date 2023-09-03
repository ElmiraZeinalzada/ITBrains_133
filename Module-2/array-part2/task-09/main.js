// Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət ədədləri konsola çıxaran funksiya yazın.
// İterasiya üçün anonim funksiyadan istifadə edin.

let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

let positiveNums = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            console.log(array[i]);;
        }

    }
}
console.log(positiveNums);