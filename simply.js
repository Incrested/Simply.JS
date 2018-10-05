// Simply.JS Beta
// Made by Incrested - https://incrested.github.io
// For stable builds and more info, visit https://github.com/Incrested/Simply.JS


function changeStyle(type, base, style, change) {
	if(type == "id"){
		// If element is identified via an ID, then use the type "id"
		var id = "'" + base + "'";
		var change2 = "'" + change + "'";
		document.getElementById(id).style.style = change2;
	} else if(type == "class"){
		// If element(s) is/are identified via a class name, then use the type "class"
		var class_ = "'" + base + "'";
		var change2 = "'" + change + "'";
		document.getElementsByClassName(class_).style.style = change2;
	}
}

function hide(type, base) {
	var base2 = "'" + base + "'";
	if(type == "id") {
		// To Hide an Element with an ID, use the type "id"
		document.getElementById(base2).style.display='none';
	} else if(type == "class") {
		// To Hide an Element(s) with a class name, use the type "class"
		document.getElementsByClassName(base2).style.display='none';
	}
}

function show(type, base) {
	var base2 = "'" + base + "'";
	if(type == "id") {
		// To show an element with an ID, use the type "id"
		document.getElementById(base2).style.display='block';
	} else if(type == "class") {
		// To hide an element(s) with a class name, use the type "class"
		document.getElementsByClassName(base2).style.display='block';
	}
}

function convert(preType, preAmount, postType) {
	if(preType == "fahren") {
		if(postType == "centi") {
			return (5/9) * (preAmount-32);
		} else if(postType = "kelvin") {
			var C = (5/9) * (preAmount-32);
			var k = C + 273.15
			return k
		} else {
			console.log("Error! You either didn't provide a conversion for post results or you provided an invalid one.");
		}
	}
}

function pi() {
	return Math.PI;
}

function round(x) {
	return Math.round(x);
}

function sqrt(x) {
	return Math.sqrt(x);
}

function randomNum(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function startDebug() {
	onerror = handleErr;
}

function handleErr(msg, url, l) {
	txt = "Error. \n\n";
	txt += "Error: " + msg + "\n";
	txt += "URL: " + url + "\n";
	txt += "Line: " + l + "\n\n";
	console.log(txt);
}
