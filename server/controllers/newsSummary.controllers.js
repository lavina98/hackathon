const ps = require('python-shell');
const path = require('path');
const pathToPython = path.join(__dirname, '../newsfromlink.py');



exports.summary = async (req, res) => {
    // link = 'https://economictimes.indiatimes.com/news/politics-and-nation/manohar-parrikars-sons-talk-about-continuing-his-legacy/articleshow/68646563.cms'
    const link = req.body.link;
    const options = {
        args: [
            link
        ]
    };
    await ps.PythonShell.run(pathToPython, options, async (err, summary) => {

        if (err) {
            console.log(err);
        }
        console.log(summary);
        console.log('I am inside the python shell!');
        res.json(summary[0]);
    });
}

exports.maliciousContent = async (req, res) => {
    console.log(req.body.link);
    const options = {
        args: [
            req.body.link
        ]
    }
    const path1 = path.join(__dirname, '../malicious/start.py');
    console.log(path1);
    await ps.PythonShell.run(path1, options, async (err, summary) => {

        if (err) {
            console.log(err);
        }
        console.log(summary);
        console.log('I am inside the python malicious shell!');
        res.json(summary[0]);
    });

};