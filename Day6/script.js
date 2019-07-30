let array= []; //creats the array
function mult(m,n,x){  //three parameters in the function for mult
    for(let i= 1; i<=n; i++){ //creates variable i and sets it equal to 1
        x.push(m*i);          // then makes it so as long as 1 is less than or equal to n, it will print it on the array
    }                         // push prints the next thing on the array
    for(i= 0; i<x.length; i++){      //it will keep happening and incrimenting by 1 until it is false then move to next loop
    console.log(x[i]);               //x.length is the amount of elements in the array
    }
}
mult(4,3,array);

let arr = [1,2,3,4,5,6,7,8,9,0,11];






