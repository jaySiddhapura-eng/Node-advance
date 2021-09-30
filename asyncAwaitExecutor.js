const promise =  require('./asyncAwait');

const checkIfItsDone = () => {
    promise.isItDone()
    .then(ok => {
        console.log(ok);
    })
    .catch(err => {
        console.error(err);
    })
}

checkIfItsDone();