var array=[]; // declare array

//generate 3 digit 10 random numbers
for(var i=0;i<10;i++){
    array[i]=Math.floor(Math.random()*900)+99;
}
console.log(array);//Print Array

array.sort();// using sorting method of array
console.log(array[array.length-2]); //print second smallest element in array.
console.log(array[1]); // print second largest element in array.