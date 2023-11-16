let n=1071225
let sum=0;
let i= 0;
while (sum<n){
    i++
    sum+=i**3;
}
if (n===sum){
    console.log(i)
} else {console.log(-1)}