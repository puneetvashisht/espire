// function foo(fn){
//     setTimeout(()=> {
//         console.log('foo invoked');
//         fn('foo')
//     }, 2000)
   
// }
function foo(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('foo invoked');
            reject('reject for some xyz reason')
        }, 2000)
    })
}
console.log('starting...');

foo()
.then(res=>console.log(res))
.catch(err => console.log(err))
// foo((res)=>console.log(res))
// let result = foo();
// console.log(result);

console.log('Allz well... that ends well');