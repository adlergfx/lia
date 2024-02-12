const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const server = 'mongodb://127.0.0.1:27017/adler';
const config = { useNewUrlParser: true, useUnifiedTopology: true };
const json = parser.json();


const debugSchema = new mongoose.Schema({ test: String }, {collection: "lia"});
const debugModel  = new mongoose.model("debug", debugSchema);

//const liaSchema = new mongoose.Schema({ name: String, tries: Number, input: mongoose.Mixed}, {collection: "lia"});
const liaSchema = new mongoose.Schema({ name: String, timestamp: Number, ip: String, questions: mongoose.Mixed}, {collection: "lia"});
const liaModel = new mongoose.model("lia", liaSchema);


mongoose.connect(server, config);
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error'));
db.once('open', function() {

  let app = express();
  app.use(cors());
/*
  app.get("/", json, (req, res)=>{
    let data = req.query;
		const mdata = new liaModel(data);
		mdata.save();
    res.sendStatus(200);
  });
*/
	app.post("/", json, (req, res)=>{
		let data = req.body;
    

    let forwarded = req.headers['x-forwarded-for'];
    data.ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;

//    data.input = JSON.stringify(data.input);
		const mdata = new liaModel(data);
		mdata.save();
		res.json(mdata);
	});

	app.listen(8080, ()=>{
	  console.log("up @8080");
	});

	console.log("there we are");

});
