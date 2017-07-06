
var arg1 = process.argv[2];
var arg2 = process.argv[3];

var fs = require("fs");

var balance = 0.00;


//create promise object


fs.readFile("bank.txt", "utf8", function(err,data) {
		if (err) {
			console.log(err);
		}
		var transactions = data.split(', ');
		for (i in transactions) {
			balance += parseFloat(transactions[i]);
		}
		switch(arg1){
			case 'total':
				console.log('You have a total of ' + Number(balance.toFixed(2)));
				break;
			
			case 'deposit': 
				fs.appendFile("bank.txt", ', ' + arg2, function(err, data) {
							if (err) {
								console.log(err);
							}
					console.log('Deposited ' + arg2);
				});
				break;

			case 'withdraw': 
				fs.appendFile("bank.txt", ', ' + parseFloat(arg2) * -1, function(err, data) {
							if (err) {
								console.log(err);
							}
					console.log('Withdrew ' + arg2 + '.');
				});
				break;

			case 'lotto': 
				if (getRandomInt(1,4) === 3) {
					fs.appendFile("bank.txt", ', ' + 2, function(err, data) {
							if (err) {
								console.log(err);
							}
							console.log('You win, time to retire. $2 deposited');
					});
				}
				else {
					fs.appendFile("bank.txt", ', -.25', function(err, data) {
							if (err) {
								console.log(err);
							}
							console.log('Losahhhh. Don\'t quit your day job.');
					});
				}
			break;
		}

	});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}





// if (arg1 === 'deposit' && arg2 === )


