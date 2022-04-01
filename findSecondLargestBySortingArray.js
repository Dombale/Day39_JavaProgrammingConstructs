
var array=[];  // declare array

//generate 3 digit 10 random numbers
for(var i=0;i<10;i++){
    array[i]=Math.floor(Math.random()*900)+99;
}
console.log(array);


 //Sorting Array
for(var i=0;i<10;i++)        
{
    var temp;
    for(var j=i+1; j<10 ;j++)
    {
        if(array[i]<array[j])
        {
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
console.log(array[array.length-2]);  //print second smallest element in array.

console.log(array[1]); // print second largest element in array.


