var fs = require('fs');

var fps = 60;
var frames = [];

try {
    for (var i =1; i < 7; i++) {
        frames[frames.length] = fs.readFileSync(`./frames/${i}.txt`, 'utf8');
    }
}catch (e) {
    console.log('No such file Exception' + e);
}
//frames[frames.length] = `Jing`;
//frames[frames.length] = `Zhe`;
//frames[frames.length] = `Feng`;
//frames[frames.length] = `Jingzhe Feng \n`;

var current = 0;
var render = () => {
    if(current === frames.length)
        current = 0;
    process.stdout.write(frames[current++]);
};

setInterval(render, 1000/fps);

