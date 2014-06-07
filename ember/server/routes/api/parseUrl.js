
/**
 * Used to parse the url to grabe the article's title and author
 */

/**
 * Expose it
 */

module.exports = ParseUlr;

var request = require('request');


function ParseUlr (req, res, next) {

	console.log("parseUrl.js: ", req.body);
	// var candidateUrl = req.body.url;
	var candidateUrl = "http://www.josebalius.com/why-i-stopped-using-ng-grid-and-rolled-my-own-with-reactjs/";

	// if exist && isUrl, then parse it
	if (isURL(candidateUrl)){
		
		//parse the url here with embedly API here:
		
		res.send('parseUrl works');
		return;
	} else {
		res.send(501, {
			flag: 0,
			msg: "fuck it~",
			candidateData: ""
		});

		console.log("This url is not valid");
		return;
	}

}	


/**
 * Check whether the {link} is valid
 * @param  {[type]}  link [description]
 * @return {Boolean}      [description]
 */
function isURL (link) {

	var urlRegEx = /(http|https|ftp):\/\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?$&\/\/=]*)?/gi;
	 
	return urlRegEx.test(link); 

}


