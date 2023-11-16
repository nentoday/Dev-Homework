function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
        const rightSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));