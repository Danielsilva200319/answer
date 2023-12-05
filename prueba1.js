function Fibonnaci(n) 
{
    let fibonnaci = [0,1];
    for (let i = 2; i < n; i++) 
    {
        fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
    }
    return fibonnaci;
}
const result = Fibonnaci(10);
console.log(result);