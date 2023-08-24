let array = [1, 4, 2, 5, 6]
console.log(array);

let clone = [...array]
for (let i = 0; i < clone.length; i++) {
    clone[i] *= 2;

}
console.log(clone);