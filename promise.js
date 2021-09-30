let done = false;

const isItDoneYet = new Promise((resolve, reject)=>{
    if(done){
        resolve('yes it is done')
    } else {
        reject('still in progress')
    }
})

module.exports = { isItDoneYet };