let n= 10;
let sum= 0;

if (n>=3){
for (let i=3; i<n; i+=3){
    if ((i % 10 !== 0) && ( i % 10 !== 5)){
        sum += i;
    }
}
if ( n>=5 ){
    for(let i=5;i<n;i+=5){
        sum+=i;
    }
}
}
console.log(sum)