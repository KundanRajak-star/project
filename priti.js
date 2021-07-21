//console.log("hello world");
  //  alert("me");
   // console.warn("this is warning");
    //console.error("This is an error");
    var number1=55;
    var number2=40;
    console.log(number1+number2);
    //for string
    var str1 ="this is string";
    var str2="This is also a string";

    //for object
    var marks={
        kundan :90,
        deepak:79,
        priti:78
    }
    //for printing
    console.log(marks)
    //for boolean
    var a=true;
    var b=false;
    console.log(a,b);


    //for array
    var arr=[1,2,3,4,5]
    //arithemtic operation
    var a=20;
    var b=40;
    console.log("The value of a+b",a+b);
    console.log("The value of a-b",a-b);
    console.log("The value of a*b",a*b);
    console.log("The value of a/b",a/b);
    //comparision opertor
    var x=40;
    var y=60;
    console.log(x==y);
    console.log(x<=y);
    // function avg
    function avg(a,b){
        return (a+b)/2;
    }
        c1=avg(4,6);
        c2=avg(15,19);
        console.log(c1,c2);
        //conditinal in javascript
        var age =34;
        if (age<8){
            console.log('you are a kid');
        }
    else{
        console.log('you are  not a kid')
    }

    //for loop
    var arr=[1,2,3,4,5,6,7];
    console.log(arr);
    for(var i=0; i<arr.length;i++)
    {
        console.log(arr[i])
    }