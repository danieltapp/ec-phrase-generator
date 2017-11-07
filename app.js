var quotes = [
'Kemba Walker for three..got it! WHOOPTIE DOOOOOOOO!!!!',
'Batum goes the dynamite!',
'Jeremy Lamb with the little DIPSY DOOOOO!'
]

 
function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

