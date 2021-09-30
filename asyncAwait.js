let done = true;

async function isItDone() {
    if(done){
        return Promise.resolve("Yes it is done");
    }
    else {
        return Promise.reject('no it is not done');
    }
}

module.exports = { isItDone };