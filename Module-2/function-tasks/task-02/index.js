function nums(a, b, c) {
    if (a > b && a > c) {
        return a;
    }else if(b > a && b > c){
        return b;
    }else if(c > a && c > b)
    return c;

}
console.log(nums(10,2,11));
console.log(nums(11,2,10));
console.log(nums(2,10,11));