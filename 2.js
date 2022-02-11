let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Hello from 1");
    }, 5000);
})
promise1.then(function(result){
    console.log(result);
    let promise2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("Hello from 2");
        }, 5000);
    });
    promise2.then(function(result){
        console.log(result);
        let promise3 = new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve("Hello from 3");
            }, 5000);
        })
        promise3.then(function(result){
            console.log(result);
            let promise4 = new Promise(function(resolve,reject){
                setTimeout(() => {
                    resolve('Hello from 4');
                }, 5000);
            })
            promise4.then(function(result){
                console.log(result);
                let promise5 = new Promise(function(resolve, reject){
                    setTimeout(() => {
                        resolve('Hello from 5');
                    }, 5000);
                })
                promise5.then(function(result){
                    console.log(result);
                })
            })
        })
    })
})