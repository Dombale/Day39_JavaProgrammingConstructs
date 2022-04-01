function primeFactors(n)
{
     var array=[];// declare array
    

     // for loop -> Traverse till i*i <= N instead of i <= N instead of i<=N for efficiency.
    for(let i = 2;i*i <= n;i++)
    {
         
        while (n % i == 0)
        {
            
            array.push(i);
            n = (n / i);
        }
    }
 
    if (n > 2){
        array.push(n);
    }
    
    console.log(array);

}
 
let n = 100;
primeFactors(n);