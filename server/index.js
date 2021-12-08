const express = require('express');
const app = express();
const port = 5001;

const cookieParser = require('cookie-parser');

const { Memo } = require('./models/Memos');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/key');

mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => res.send('Hello World'));

app.post('/api/memo/saveMemo', (req, res) => {
    const memo = new Memo(req.body);
    memo.save((err, memo) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({success: true});
    })
});

app.post('/api/memo/getMemo', (req, res) => {
    Memo.find({})
    .exec((err, memos) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success: true, memos});
    })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));