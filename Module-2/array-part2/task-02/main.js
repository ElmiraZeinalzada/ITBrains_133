// Massiv üzərində əməliyyatlar aparın.
// 10 ədəddən ibarət massiv yaradın.
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [one, two, ...others] = numbers
console.log(`${one},${two}`);
console.log(others);