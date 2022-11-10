let arr = ['a','b','c','d','e','f'];
for(let big of arr) {
    big = big.charAt(0).toUpperCase() + big.substr(1);
    console.log(big);
}