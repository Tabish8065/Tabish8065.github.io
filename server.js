const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const filePath = path.join(__dirname, 'out.txt'); // Path to the out.txt file

app.post('/save-data', (req, res) => {
    const { text } = req.body;

    fs.appendFile(filePath, text + '\n', (err) => {
        if (err) {
            return res.status(500).send(err.toString());
        }
        res.status(200).redirect('https://tabish8065.github.io/page2');
    });
});

app.get('/',(req, res) => {
    console.log("Get");
    res.status(200).send('done');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});