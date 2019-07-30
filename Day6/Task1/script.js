// const CountToN = (x) =>
function CountToN(x)
{
    let absX= Math.abs(x);

    let index = 1;
    while(index <= absX)
    {
        console.log(index);
        index++; //index++ or index=index+1
    }    
}

CountToN(-7);