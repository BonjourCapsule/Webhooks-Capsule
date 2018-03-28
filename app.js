var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Bonjour !'); });

app.listen(port, function () {
	console.log('Listening on port ' + port);
});

function createPayload (text) {
	return ({text});
}

app.post('/hello', function (req, res, next) {
	var UserName = req.body.user_name;

	// Loop otherwise..
	if (req.body.user_name !== 'slackbot') {
		return res.status(200).json(createPayload('Bonjour ' + UserName + ' :smile:'));
	} else {
		return res.status(200).end();
	}
});

app.post('/bye', function (req, res, next) {
	var UserName = req.body.user_name;

	if (req.body.user_name !== 'slackbot') {
		return res.status(200).json(createPayload('Aurevoir ' + UserName + ' :upside_down_face:'));
	} else {
		return res.status(200).end();
	}
});
