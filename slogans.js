var fs = require('fs');

const PATH = 'slogans.txt';

fs.readFile(PATH, 'utf8', (err, data) => {
    if (!err) {
        var split = data.split('\n');
        var rnd = Math.floor(Math.random() * split.length - 1)
        console.log(split[rnd]);
    } else {
        console.log(err);
    }
})