function highAndLow(n){
    const  strArray=n.split(" ")
    const numArray = strArray.map(Number);
let max = Math.max(...numArray);
let min =Math.min(...numArray);
console.log(max,min);
}

highAndLow("1 2 3 4 5")
highAndLow("1 2 -3 4 5")
highAndLow("1 9 3 4 -5")

