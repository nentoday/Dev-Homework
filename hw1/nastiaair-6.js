function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(element => element < pivot);
    const middle = arr.filter(element => element === pivot);
    const right = arr.filter(element => element > pivot);

    return quickSort(left).concat(middle, quickSort(right));
}
function highestNumber(n){
    if (n>=0){
        let array=[]
        while (n>0){
            array.push (n % 10)
            n=Math.floor(n/10);
        }
        array= quickSort(array)
        let result=0;
        for (let i=0;i<array.length;i++){
            result+=array[i]*10**i;
            }
        console.log(result)
    } else console.log(-1)
}
highestNumber(123456789)
highestNumber(-10)
highestNumber(54698778565498123)