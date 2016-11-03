/**
 * Created by JessJing on 2016/11/2.
 */
var argv = process.argv.slice(2);
var installPackageName = argv[1].toString();
switch (argv[0]){
    case 'init':
        console.info('simulate npm init');
        break;
    case 'install':
        console.info('simulate npm install '+ installPackageName);
        break;
    case 'uninstall':
        console.info('simulate npm uninstall '+ installPackageName);
        break;
}
//console.log(argv.toString());


//node 01 install react

