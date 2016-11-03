
var message = 'Hello';

process.stdout.write(`${message} world \n`);

console.log(process.argv);

var log = (msg) => {
    process.stdout.write(msg + '\n');
};

log('process stdout');