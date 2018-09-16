// var somepromise = new Promise ((resolve,reject) =>{
// //    resolve('hey it eragon'); 
// reject('hey it eragon'); 
// }).then((message)=>{
//     console.log(message);
// },(errormessage)=>{
// console.log(errormessage);
// });


var asyncadd = ((a,b)=>{
return new Promise((resolve,reject)=>{
if(typeof a === 'number'&& typeof b === 'number')
resolve(`${a+b}`);
else
reject('please enter a valid numbers');
});
});

asyncadd('4',5).then((result)=>{
    console.log(result);
},(error)=>{
console.log(error);
})