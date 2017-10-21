
exports.login = function(req ,res) {
	res.json([{success: true}]);
};

exports.home = function(req, res) {
	res.render('home', { headline: 'Every city has something to say!', title: 'Demo App'});
};


exports.city = function(req, res) {
	var city = req.params.city;
	var noOfImages = 4;
	var title = "";
	var headline = "";

	if(city == 'berlin'){
		headline = "Berline Awesome city!";
		title = 'Berline'
	}
	else if(city == 'paris'){
		headline = "Paris Awesome city!";
		title = "Paris";
	}
	else if(city == 'madrid'){
		headline = "Madrid Awesome is city!";
		title = "Madrid";
	}
	else if(city == 'newyork'){
		headline = "New York Awesome city!";
		noOfImages = 6;
		title = "New York";
	}
	else if(city == 'london'){
		headline = "London Awesome city!";
		title = "London";
	}

	res.render('city', {title : title, noOfImages: noOfImages, headline: headline, city: city});

};