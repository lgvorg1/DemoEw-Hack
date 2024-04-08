// 13 evidences
const child_process = require("child_process");

child_process.fork('', {silent:false});
child_process.fork('');

child_process.fork('', {silent:true});


child_process.spawn('pwd');

child_process.spawn('pwd', 'ignore');
child_process.spawn('pwd', ['ignore', 'ignore', 'ignore']);
child_process.spawnSync('pwd', 'ignore');
child_process.spawnSync('pwd', ['ignore', 'ignore', 'ignore']);



child_process.exec('cmd');
child_process.execSync('cmd');

child_process.exec('cmd', 'ignore');
child_process.exec('cmd', ['ignore', 'ignore', 'ignore']);
child_process.execSync('cmd', 'ignore');
child_process.execSync('cmd', ['ignore', 'ignore', 'ignore']);



child_process.execFile('file');
child_process.execFileSync('file');

child_process.execFile('file', 'ignore');
child_process.execFile('file', ['ignore', 'ignore', 'ignore']);
child_process.execFileSync('file', 'ignore');
child_process.execFileSync('file', ['ignore', 'ignore', 'ignore']);
