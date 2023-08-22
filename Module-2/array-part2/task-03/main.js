// Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers);
let max = Math.max(...numbers);
console.log(max);