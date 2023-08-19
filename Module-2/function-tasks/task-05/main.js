function min(a,b) {
    if (a > b) {
        return b;
    }else if( b > a){
        return a;
    }
}
console.log(min(20,11));