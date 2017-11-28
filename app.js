var players = [
'Dwayne Bacon',
'Nicolas Batum',
'Michael Carter-Williams',
'Treveon Graham',
'Dwight Howard',
'Frank Kaminsky',
'Michael Kidd-Gilchrist',
'Jeremy Lamb',
'Mangok Mathiang',
'Malik Monk',
"Johnny O'Bryant",
'Marcus Paige',
'Julyan Stone',
'Kemba Walker',
'Marvin Williams',
'Cody Zeller',
'Kemba',
'MKG',
'Cody',
'Nic',
'The Frenchman',
'Frank the Tank',
'Monk',
'Bacon',
'Malik',
'Cody Zeller! The Z Man',
'Special K! Oh my Kaminsky'
]

var quotes = [
' for three..got it! WHOOPTIE DOOOOOOOO!!!!',
', jiminy crickets that was incredible!',
' with the little DIPSY DOOOOO!',
'  with the SLAM!',
'! How do you dooooooo?!?!',
' with the gorgeous, pull up jumper! He has been an assasin from the mid-range!',
' is tougher than a two dollar steak!',
' with a pair of beauties from the charity stripe.',
' with the marvelous 3!',
' with the guts of a cat burglar!',
' takes it right to Goliath and scores!',
', with the wingspan of a condor!',
' is the truth!',
', please sir can I have some more!',
' is putting on a clinic tonight!',
", we're not worthy!!!!",
"! by the beard of zeus!?!?!",
'! Are you kidding me? What splendor!',
'!!! He who pays the piper calls the tune!',
"! Put on a raincoast, because he's making it rain in here tonight!",
'!!! Are you kidding me?!',
', how great thou art!',
' can do no wrong!',
'!!! (Wilhelm scream sound effect)',
'! A man among men!',
'! Sweet Christmas!',
'!!! One small step for man, one giant leap for mankind!!!',
'! Hallowed be thy game!',
'! My heart just skipped a beat!',
" is doing the lord's work this evening!!!",
'!!! Goodie goodie gum drops!!!!!',
' is a gentlemen and a scholar.',
'! someone call 9-11, because this man is on fire!!!',
' is seeing an extra big basket tonight',
' has the magic touch. He could teach David Copperfield a thing or two.',
" is getting a hero's welcome.",
'!!!!!!!!!!!!!!!!!!!!!!!!!!',
'!!! Dunk, dunk dooce!',
". It's just not fair what this man is capable of."
]

 
function newQuote(){
	var name = Math.floor(Math.random() * (players.length));
	var phrase = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = players[name] + quotes[phrase];
};

