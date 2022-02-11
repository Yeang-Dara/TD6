async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Hello World!'),5000)
    });
    let result = await promise;
    console.log(result);
}
f();