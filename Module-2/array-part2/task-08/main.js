// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
function negativeNums(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            console.log(array[i]);;
        }

    }
}
console.log(negativeNums(array));