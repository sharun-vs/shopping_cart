const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next)=> {
	res.send("hello world!");
})


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yviq2.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
	{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	app.listen(process.env.PORT);
})
.catch(err => {
	console.log(err);
});

