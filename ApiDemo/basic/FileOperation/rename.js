// 移动文件和重名


const fs = require('fs');
const path = require('path');


var currentPath = path.join(__dirname, '../temp1.txt');
var targetPath = path.join(__dirname, '../img/temp1.txt');

fs.rename(currentPath, targetPath);/**
 * Created by JessJing on 2016/11/17.
 */
