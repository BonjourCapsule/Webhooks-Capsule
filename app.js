// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   app.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: jobailla <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/03/21 16:59:44 by jobailla          #+#    #+#             //
//   Updated: 2018/04/01 16:59:55 by jobailla         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

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
	var userId = req.body.user_id;

	// Loop otherwise..
	if (req.body.user_name !== 'slackbot') {
		return res.status(200).json(createPayload('Bonjour <@' + userId + '> :smile:'));
	} else {
		return res.status(200).end();
	}
});

app.post('/bye', function (req, res, next) {
	var userId = req.body.user_id;

	if (req.body.user_name !== 'slackbot') {
		return res.status(200).json(createPayload('Aurevoir <@' + userId + '> :upside_down_face:'));
	} else {
		return res.status(200).end();
	}
});

app.post('/marvin', function (req, res, next) {
	var userId = req.body.user_id;

	if (req.body.user_name !== 'slackbot') {
		return res.status(200).json(createPayload('Vous me déprimez...'));
	} else {
		return res.status(200).end();
	}
});
