
const express = require('express');
const cors = require('cors');


const PORT = 5000;
const path = require('path');

app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => console.log('Server started on ' + PORT));

const auth = async (req, res, next) => {
    console.log(req.header);
    next();
}


app.get('/', (req,res) => {
    res.status(200).sendFile(__dirname + "/public/main.html");
})

app.get('/test', auth, (req, res) => {
    res.status(200).sendFile(__dirname + "/public/test.html");
})