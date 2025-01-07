 console.log("start");
 //global scope
 var a=10
 console.log(a);
 //script scope
 let b=20
 console.log(b);

 const c=30
 console.log(c);
 
 console.log("end");

 let _a3="ramya"
 console.log(_a3);
 var a=5;
 a=10;
 document.write(a+a)
 console.log(a+a)

 let g=1;
 g=10;
 console.log(g+g)

 let s="sai"
 {
    let s="kumar"
    console.log(s)
 }
 console.log(s)

 var a="sai"
 {
    var a="kumar"
    console.log(a)
 }
 console.log(a)
 
 let h=1;
 console.log('hi +h+h')
 document.write('hi+ h+h' )
 document.write('hi+ $(h+h)')
 console.log('hi +$(h+h)')

 a = "sai"
 b = "kumar"
 age = 30
 console.log('sai')
 document.write('kumar')
 console.log(`Iam ${a+b},my age is ${age} years old`)
 document.write(`Iam ${a+''+b},my age is ${age} years old`)