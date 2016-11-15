/**
 * Created by JessJing on 2016/11/9.
 */

const fs = require('fs');

console.time('File Stream');
fs.stat('./README.md',(err,status) => {
    if(err) {
        console.error(err);
        fs.writeFile('./README.md',new Date(),(err) => {
            console.error(err)
        })
    }
    console.log(status);
});

fs.unlink('./README.md',(err) => {
    if(err){
        console.error(err)
    }
    console.info('README.md is deleted...')
});

console.timeEnd('File Stream');