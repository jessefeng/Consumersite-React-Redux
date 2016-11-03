
var message = 'Hello';

process.stdout.write(`${message} world \n`);

var log = (msg) => {
    process.stdout.write(msg + '\n');
};

log('process stdout');