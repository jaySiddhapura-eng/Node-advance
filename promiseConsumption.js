const promise = require('./promise');

const checkIfItsDone = () => {
    promise.isItDoneYet
    .then(ok => {
        console.log(ok);
    })
    .catch(err => {
        console.error(err);
    })
}

checkIfItsDone();