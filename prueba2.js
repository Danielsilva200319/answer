const M = 37;
const m = 12;
function Ruzzia(M,m)
{
    let result = 0;
    while (M > 0) 
    {
        if (M%2 !== 0) 
        {
            result += m;
        }
        M = Math.floor(M/2);
        m = m * 2;   
    }
    return result;  
}
console.log(Ruzzia(M,m));