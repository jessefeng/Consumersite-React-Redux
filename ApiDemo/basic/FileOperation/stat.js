/**
 * Created by JessJing on 2016/11/17.
 */
// 打印当前目录所有文件



const fs = require('fs');
const path = require('path');
require('./proto.js');
//直接excute proto.js

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');



fs.readdir(target, (err, files) => {
    files.forEach(file=> {
        console.time(file);
        // console.log(path.join(target, file));
        fs.stat(path.join(target, file), (err, stats) => {
            // stats.mtime.
            console.log(`${stats.mtime.format('yyyy/MM/dd HH:mm') }\t${stats.size}\t${file}`);
            console.timeEnd(file);
        });
    });
});
