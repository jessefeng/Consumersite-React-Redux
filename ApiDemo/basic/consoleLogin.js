/**
 * Created by JessJing on 2016/11/8.
 */
//Node JS
//1 Non-blocking
//2 Event-driven
process.stdin.setEncoding('utf8');


const UsersObj = {
    'user_1':'1',
    'user_2':'2',
    'user_3':'3',
    'user_4':'4',
    'user_5':'5'
};
const systemMsgUserName = "Please Enter the User Name \n";
const systemMsgPassword = "Please Enter the Password \n";
var username = '';
process.stdout.write(systemMsgUserName);

process.stdin.on('data', (input)=> {
    if(!username){
        var inputUserName = input.toString().trim();
        if(Object.keys(UsersObj).indexOf(inputUserName) === -1){
            process.stdout.write('User Not Exist, please re-enter \n');
            username = '';
        }else {
            process.stdout.write(systemMsgPassword);
            username = inputUserName;
        }
    }else {
        var inputPwd = input.toString().trim();
        if(inputPwd === UsersObj[username]){
            process.stdout.write('Log Success! welcome back! >>' + username);
            process.exit(0);
        }else {
            process.stdout.write('Wrong Password, please re-enter \n');
        }
    }
});


process.stdout.write('Simple Login Simulation \n');
//process.stdin.on('readable',() => {
//    var chunk = process.stdin.read();
//    process.stdout.write(`data_00: ${chunk}`);
//});
//
//process.stdin.on('data', (data)=> {
//   process.stdout.write(`data_01: ${data}`);
//});