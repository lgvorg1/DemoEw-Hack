const childprocess = require('child_process');

function runProcess(runPath, elevated) {
    try {
        let cmd;
        if (elevated) {
            cmd = `powershell -Command "Start-Process -WindowStyle hidden \\"${runPath}\\" -Verb RunAs"`;
        } else {
            cmd = `powershell -Command "Start-Process -WindowStyle hidden \\"${runPath}\\" "`
        }

        childprocess.execSync(cmd, {stdio: 'ignore'});
    } catch (e) {
        return false;
    }

    return true;
}
