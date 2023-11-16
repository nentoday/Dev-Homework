function roundTable(arr, d){
    let res=[];
    for(let i= 0; i < arr.length / d; i++){
        let sum = 0;
        for (let j=i; j < arr.length; j += arr.length/d ){
            sum += arr[j];
        }
        res.push(sum)
    }
    return Math.max(...res)
}
console.log(roundTable([1, 2, 3, 4], 2))
console.log(roundTable([1, 5, 6, 3, 4, 2], 3))
console.log(roundTable([1, 1, 0], 1))