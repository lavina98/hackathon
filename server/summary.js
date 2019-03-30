
const ps = require('python-shell');
const path = require('path');

const pathToPython = path.join(__dirname, './newsfromlink.py');

link = 'https://economictimes.indiatimes.com/news/politics-and-nation/manohar-parrikars-sons-talk-about-continuing-his-legacy/articleshow/68646563.cms'

const options = {
    args: [
        link
    ]
};
ps.PythonShell.run(pathToPython, options, async (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log('res is')
    console.log(res[0]);
});
