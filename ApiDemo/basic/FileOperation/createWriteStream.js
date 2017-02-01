/**
 * Created by JessJing on 2016/11/17.
 */
// 文件写入

const fs = require('fs');
const path = require('path');

// fs.writeFile()

// JSON.stringify 序列化
// JSON.parse 反序列化

// 默认覆盖文件
// fs.writeFile(path.join(__dirname, '../temp.txt'), JSON.stringify({ id: 10 }), (err) => {
//   if (err) {
//     // 读文件是不存在报错
//     // 意外错误
//     // 文件权限问题
//     // 文件夹找不到(不会自动创建文件夹)
//     console.log(err);
//   } else {
//     console.log('success');
//   }
// });

// fs.writeFileSync()

// java c
// try {

// } catch (error) {

// }

// fs.createWriteStream()

// var streamWriter = fs.createWriteStream(path.join(__dirname, '../temp.txt'));

// setInterval(() => {
//   streamWriter.write('hello', () => {
//     console.log('+1');
//   });
// }, 1000);




fs.appendFile(path.join(__dirname, '../temp.txt'), JSON.stringify({ id: 10 }), (err) => {
    if (err) {
        // 读文件是不存在报错
        // 意外错误
        // 文件权限问题
        // 文件夹找不到(不会自动创建文件夹)
        console.log(err);
    } else {
        console.log('success');
    }
});