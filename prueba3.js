let SM, SN;
function divisor(x) 
{
    let suma = 0;
    for (let k = 1; k < Math.floor(x / 2) + 1; k++) 
    {
        if (x % k == 0) 
        {
            suma = suma + k;
        }
    }
    return suma;
}
for (let m = 1000; m <= 1500; m++) 
{
    SM = divisor(m);
    for (let n = m; n <= 1500; n++) 
    {
        SN = divisor(n);
        if (SM == n && SN == m) 
        {
            console.log(m, " y ", n, " son amigos", "\n");
        }
    }
}