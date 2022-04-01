//Declare variables
var lastNo,firstNo,sum;

//Loop transverse reach till 100.
for(var i=0;i<100;i++){//if i=22
    lastNo=i%10; //2
    firstNo=Math.floor(i/10);//2
    sum=lastNo*10+firstNo;//2*10+2=22
    if(sum==i){
        console.log(i);
    }
}