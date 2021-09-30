async function awaitSample() { 
    console.log('task1');

    let myPromise = new Promise((res, rej)=>{
        setTimeout(() => {
            res('time up..!')
        }, 3000);
    })

    console.log(await myPromise);
    console.log('task2');
}

awaitSample();