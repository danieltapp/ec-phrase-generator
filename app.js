var quotes = [
'Kemba Walker for three..got it! WHOOPTIE DOOOOOOOO!!!!',
'Batum goes the dynamite!',
'Jeremy Lamb with the little DIPSY DOOOOO!',
'Lordy, Lordy, Here Comes 40! Cody Zeller with the SLAM!',
'Malik Monk! How do you dooooooo?!?!',
'MKG with the gorgeous, pull up jumper! He has been an assasin from the mid-range!',
'Dwayne Bacon! Oh my! Wakey, Wakey! And-1 for Bakey!'

]

 
function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

