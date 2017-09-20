var song = [
	{
		"name":"Cold Water",
		"singer":"Justin Bieber/Cody Simpson",
		"src":"music/Justin Bieber - Cold Water.mp3",
		"mv_src":"video/Cold Water.mp4"
	},
	{
		"name":"Eenie Meenie",
		"singer":"Justin Bieber/Sean Kingston",
		"src":"music/Justin Bieber - Eenie Meenie.mp3",
		"mv_src":"video/Eenie Meenie.mp4"
	},
	{
		"name":"I'll Show You",
		"singer":"Justin Bieber",
		"src":"music/Justin Bieber - I'll Show You.mp3",
		"mv_src":"video/I'll Show You.mp4"
	},
	{
		"name":"What Do You Mean",
		"singer":"Justin Bieber",
		"src":"music/Justin Bieber - What Do You Mean.mp3",
		"mv_src":"video/What Do You Mean.mp4"
	}
];
var WDUM = [ ["0.23","What Do You Mean?"],["1.79","演唱：Justin Bieber"],
["14.87","What do you mean"],["19.00","When you nod your head yes"],
["20.82","But you wanna say no"],["22.72","What do you mean"],
["26.64","When you don't want me to move"],["28.51","But you tell me to go"],
["30.25","What do you mean"],["34.09","What do you mean"],
["36.28","Said we're running out of time what do you mean"],
["41.70","What do you mean"],["44.18","Better make up your mind"],
["45.53","What do you mean"],
["48.24","You're so indecisive of what I'm saying"],
["52.09","Trying to catch the beat make up your heart"],
["55.84","Don't know if you're happy or complaining"],
["59.68","Don't want for us to end where do I start"],
["62.81","First you wanna go left and you want to turn right"],
["66.83","Wanna argue all day make love all night"],
["70.77","First you up and you're down and then between"],
["74.58","Oh I really want to know"],
["76.34","What do you mean"],
["80.39","When you nod your head yes"],
["82.23","But you wanna say no"],
["83.92","What do you mean"],
["87.97","When you don't want me to move"],
["89.86","But you tell me to go"],
["91.61","What do you mean"],
["95.48","What do you mean"],
["97.90","Said we're running out of time what do you mean"],
["103.04","What do you mean"],
["105.45","Better make up your mind"],
["106.93","What do you mean"],
["109.59","You're overprotective when I'm leaving"],
["113.40","Trying to compromise but I can't win"],
["117.14","You wanna make a point but you keep preaching"],
["120.95","You had me from the start won't let this end"],
["124.17","First you wanna go left and you want to turn right"],
["128.38","Wanna argue all day make love all night"],
["132.20","First you up and you're down and then between"],
["136.11","Oh I really want to know"],
["137.89","What do you mean"],
["141.76","When you nod your head yes"],
["143.70","But you wanna say no"],
["145.40","What do you mean"],
["149.45","When you don't want me to move"],
["151.39","But you tell me to go"],
["153.04","What do you mean"],
["157.01","What do you mean"],
["159.34","Said we're running out of time what do you mean"],
["164.52","What do you mean"],
["167.01","Better make up your mind"],
["168.38","What do you mean"],
["172.42","When you nod your head yes"],
["174.30","But you wanna say no"],
["176.02","What do you mean"],
["180.11","When you don't want me to move"],
["182.02","But you tell me to go"],
["183.72","What do you mean"],
["187.62","What do you mean"],
["190.00","Said we're running out of time what do you mean"],
["195.23","What do you mean"],
["197.69","Better make up your mind"],
["199.12","What do you mean"]
];

var ISY = [ ["00.54","I'll Show You - Justin Bieber"],
["1.21","Written by Justin Bieber/Josh Gudwin/Michael Tucker/"],
["2.88","Sonny Moore/Theron Feemster"],
["05.02","My life is a movie and everyone's watching"],
 ["14.82","So let's get to the good part and past all the nonsense"],
 ["24.87","Sometimes it's hard to do the right thing"],
 ["29.30","When the pressure's coming down like lightning"],
 ["34.86","It's like they want me to be perfect"],
 ["39.60","When they don't even know that I'm hurting"],
 ["44.76","This life's not easy  I'm not made out of steel"],
 ["49.71","Don't forget that I'm human  don't forget that I'm real"],
 ["54.93","You act like you know me  but you never will"],
 ["59.94","But that's one thing that I know for sure"],
 ["64.59","I'll show you"],
 ["69.32","I'll show you"],
 ["74.32","I'll show you"],
 ["79.41","I'll show you"],
 ["85.27","I got to learn things  learn them the hard way"],
 ["94.87","To see what it feels like  no matter what they say"],
 ["104.79","Sometimes it's hard to do the right thing"],
 ["109.40","When the pressure's coming down like lightning"],
 ["114.89","It's like they want me to be perfect"],
 ["119.54","When they don't even know that I'm hurting"],
 ["124.75","This life's not easy  I'm not made out of steel"],
 ["129.48","Don't forget that I'm human  don't forget that I'm real"],
 ["134.60","You act like you know me  but you never will"],
 ["139.82","But that's one thing that I know for sure"],
 ["144.52","I'll show you"],
 ["149.27","I'll show you"],
 ["154.33","I'll show you"],
 ["159.58","I'll show you"],
 ["164.74","This life's not easy  I'm not made out of steel"],
 ["169.36","Don't forget that I'm human  don't forget that I'm real"],
 ["174.53","You act like you know me  but you never will"],
 ["179.76","But that's one thing that I know for sure"],
 ["184.35","I'll show you"],
 ["189.42","I'll show you"]
 ];

var EEE = [
["00.10","Eenie Meenie - Justin Bieber/Sean Kingston"],
["00.20","Written by：Ernest Clar"],
["00.68","Eenie meenie miney mo"],
["02.28","Catch a bad chick by her toe"],
["04.21","If she holla if if if she hollas let her go"],
["08.32","She's indecisive"],
["10.96","She can't decide"],
["12.51","She keeps on lookin"],
["14.95","From left to right"],
["16.40","Girl c'mon get closer"],
["18.91","Look in my eyes"],
["20.36","Searching is so wrong"],
["22.48","I'm Mr. Right"],
["23.34","You seem like the type"],
["25.87","To love 'em and leave 'em"],
["27.95","And disappear right after the song"],
["30.86","So give me the night"],
["33.56","To show you hold you"],
["35.74","Don't leave me out here dancin' alone"],
["38.82","You can't make up your mind mind mind mind mind"],
["43.08","Please don't waste my time time time time time"],
["46.77","I'm not tryin' to rewind wind wind wind wind"],
["51.08","I wish our hearts could come together as one"],
["54.76","'Cause shawty is an eenie meenie miney mo lover"],
["58.72","Shawty is an eenie meenie miney mo lover"],
["65.66","Shawty is an eenie meenie miney mo lover"],
["66.58","Shawty is an eenie meenie miney mo lover ooh"],
["71.91","Let me show you what you're missin'"],
["74.62","Paradise"],
["76.01","With me you're winning girl"],
["77.94","You don't have to roll the dice"],
["79.89","Tell me what you're really here for here for"],
["82.27","Them other guys"],
["83.77","I can see right through ya"],
["86.35","You seem like the type"],
["89.03","To love 'em and leave 'em"],
["91.26","And disappear right after the song"],
["94.19","So give me the night"],
["96.92","To show you and hold you"],
["99.27","Don't leave me out here dancin' alone"],
["102.47","Can't make up your mind mind mind mind mind"],
["106.25","Please don't waste my time time time time time"],
["110.13","Not tryin' to rewind wind wind wind wind wind"],
["114.52","I wish our hearts could come together as one"],
["118.17","Shawty yeah is an eenie meenie miney mo lover'"],
["102.06","Shawty is an eenie meenie miney mo lover"],
["106.00","Shawty is an eenie meenie miney mo lover"],
["130.01","Shawty is an eenie meenie miney mo lover"],
["135.21","Eenie meenie miney moe"],
["136.92","Catch a bad chick by her toe"],
["138.87","If she holla if if if she holla let her go"],
["142.94","Eenie meenie miney moe"],
["144.87","Catch a bad chick by her toe"],
["146.86","If she holla la la la la let let her"],
["149.92","Shawty is an eenie meenie miney mo lover"],
["153.78","Shawty is an eenie meenie miney mo lover"],
["157.73","Shawty is an eenie meenie miney mo lover"],
["161.67","Shawty is an eenie meenie miney mo"],
["165.70","You Can't make up your mind mind mind mind mind"],
["169.41","Please don't waste my time time time time time"],
["173.38","I'm not tryin' to rewind wind wind wind wind wind oh yeah"],
["178.07","I wish our hearts could come together as one"],
["181.41","Shawty is an eenie meenie miney mo lover"],
["185.46","Shawty is an eenie meenie miney mo lover"],
["189.29","Shawty is an eenie meenie miney mo lover"],
["193.39","Shawty is an eenie meenie miney mo lover"],
["197.50","Oh"]
];

var CW = [
["0.10","Cold Water - Major Lazer/Justin Bieber/MØ"],
["0.20","Written by：Jamie Scott/Benjamin Levin/Justin Bieber/"],
["01.00","Henry Allen/Thomas Pentz/Philip Meckseper/"],
["02.06","Ed Sheeran/King Henry/Benny Blanco/Jr Blender/Diplo"],
["03.06","Everybody gets high sometimes you know"],
["08.52","What else can we do when we're feeling low"],
["13.69","So take a deep breath and let it go"],
["18.87","You shouldn't be drowning on your own"],
["22.81","And if you feel you're sinking I will jump right over"],
["28.04","Into cold cold water for you"],
["32.96","And although time may take us into different places"],
["38.58","I will still be patient with you"],
["43.17","And I hope you know"],
["45.74","I won't let go"],
["51.08","I'll be your lifeline tonight"],
["56.21","I won't let go"],
["61.40","I'll be your lifeline tonight"],
["67.77","Cause we all get lost sometimes you know"],
["73.09","It's how we learn and how we grow"],
["78.26","And I wanna lay with you 'til I'm old"],
["83.47","You shouldn't be fighting on your own"],
["87.45","And if you feel you're sinking I will jump right over"],
["92.62","Into cold cold water for you"],
["97.43","And although time may take us into different places"],
["102.99","I will still be patient with you"],
["107.66","And I hope you know"],
["110.53","I won't let go"],
["112.41","I won't let go no no no no no no"],
["116.35","I'll be your lifeline tonight"],
["120.70","I won't let go"],
["125.92","I'll be your lifeline tonight"],
["132.12","Come on come on"],
["133.11","Save me from my rocking boat"],
["135.82","I just wanna stay afloat"],
["138.57","I'm all alone"],
["142.09","And I hope I hope someone come and take me home"],
["145.94","Somewhere I can rest my soul"],
["149.00","I need to know you won't let go"],
["153.81","I won't let go"],
["155.57","I won't let go no no no no no no"],
["158.06","I'll be your lifeline tonight"],
["162.07","You won't let go"],
["167.23","I'll be your lifeline tonight"],
["172.43","I won't let go"],
["177.52","I won't let go"]
];
var tArr0 = [];
var tArr1 = [];
var tArr2 = [];
var tArr3 = [];
var sArr0 = [];
var sArr1 = [];
var sArr2 = [];
var sArr3 = [];
for(var i = 0; i< CW.length;i++){
	tArr0.push(CW[i][0]);
	sArr0.push(CW[i][1]);
}
for(var i = 0; i< EEE.length;i++){
	tArr1.push(EEE[i][0]);
	sArr1.push(EEE[i][1]);
}
for(var i = 0; i< ISY.length;i++){
	tArr2.push(ISY[i][0]);
	sArr2.push(ISY[i][1]);
}
for(var i = 0; i< WDUM.length;i++){
	tArr3.push(WDUM[i][0]);
	sArr3.push(WDUM[i][1]);
}
var ttArr = [tArr0,tArr1,tArr2,tArr3];
var ssArr = [sArr0,sArr1,sArr2,sArr3];
var data = { 
	time:ttArr[0],
	lrc:ssArr[0]
};
 var str = template('template',data);
 document.querySelector(".show-lrc-ul").innerHTML= str;