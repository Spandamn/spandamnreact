'use strict';

let imageHTML = document.getElementById("imageBlock").innerHTML;

let workHTML = '<strong><h2>My Work</h2></strong>\n<ul>\n\t\t\t\t\t<li>I\'m a contributor to <a href="https://pokemonshowdown.com" target="_blank">Pokemon Showdown</a>, an online game simulator which averages 32 thousand+ users. I am also <a href="https://pokemonshowdown.com/credits" target="_blank">credited for contributing</a>.</li>\n\t\t\t\t\t<li>I have written an independant <a href="https://github.com/Spandamn/Pokemon-Showdown-Java-Bot" target="_blank">bot</a> for Pokemon Showdown in Java, which is the only bot for the website written in Java.</li>\n\t\t\t\t\t<li>I have forked and worked on a <a href="https://github.com/Spandamn/Abyssal-Bot" target="_blank">JavaScript based Pokemon Showdown Bot</a>.</li>\n\t\t\t\t\t<li>I have written more than 12 poems, although I dont intend to publish them haha.</li>\n\t\t\t\t\t<li>I have also forked and worked on a <a href="https://github.com/Spandamn/DH" target="_blank">side server of Pokemon Showdown</a>.</li>\n\t\t\t\t\t<li>I created a game webpage for second year internals <a href="https://pokemonshowdown.com" target="_blank">HTML Project</a> using mainly JavaScript.</li>\n\t\t\t\t\t<li>I created a node.js based <a href="https://gist.github.com/Spandamn/08e4a4ac3f0f52bcb5afd7ed94474c10" target="_blank">script</a> which extracts messages from messages.json (from Instagram\'s data dumps) and creates separate .txt files for Instagram DMs with different people.</li>\n\t\t\t\t\t<li>I created a node.js based <a href="https://gist.github.com/Spandamn/754d4c68f1d389ddec76389cae29a151" target="_blank">script</a> which attempts to fix lagging or early subtitles for movies.</li>\n\t\t\t\t\t<li>I created <a href="https://gist.github.com/Spandamn/47135e8e830f5a75205539a59a53cce4" target="_blank">3 games</a> written in Java for my 10th grade ICSE project for Computer Applications.</li>\n\t\t\t\t</ul>';

let strenHTML = '<strong><h2>My Strengths</h2></strong>\n<ul>\n\t\t\t\t\t<li>I started programming with C++ from 7th grade at <a href="https://singhaniaschool.org" target="_blank">Smt. Sulochanadevi Singhania School.</a></li>\n\t\t\t\t\t<li>I chose Computer Applications as my optional subject in 9th grade, and studied Java for 4 years there.</li>\n\t\t\t\t\t<li>Since I have been using Computers since I was a small child, my typing speed is faster than most people.</li>\n\t\t\t\t\t<li>I use Github, and have knowledge of using git.</li>\n\t\t\t\t\t<li>I have studied JavaScript, HTML by contributing to Pokemon Showdown for 4+ years. My main strength is server side programming through node.js.</li>\n\t\t\t\t\t<li>I studied C and Python at JNEC Aurangabad, and also studied Python through outside courses.</li>\n\t\t\t\t\t<li>I\'ve been using Linux since I was 16; hence I am well versed with Linux terminal commands. I use Ubuntu 20.04 as my main OS.</li>\n\t\t\t\t\t<li>I have also studied and know how to use digital graphics tools like Corel Draw and Inkscape. I have designed logos and business cards for my friend\'s startups using these softwares.</li>\n\t\t\t\t\t<li>I can also operate Microsoft Office software well.</li>\n\t\t\t\t\t<li>My curiosity to learn more keeps me motivated to learn new things in the computer science field.</li><li>This website was not made using tools like Wordpress, I hard-coded it.</li>\n\t\t\t\t</ul>';

let hobbyHTML = '<strong><h2>My Hobbies</h2></strong>\n<ul>\n\t\t\t\t\t<li>I like playing sports like badminton, football, etc.</li>\n\t\t\t\t\t<li>I also learned to play the guitar.</li>\n\t\t\t\t\t<li>I like listening to music.</li>\n\t\t\t\t\t<li>I like programming.</li>\n\t\t\t\t\t<li>Learning new languages is also one of my interests.</li>\n\t\t\t\t\t<li>Contributing to <a href="https://pokemonshowdown.com" target="_blank">Pokemon Showdown.</a> is also one of my hobbies.</li>\n\t\t\t\t\t<li>Following my curiosity towards new and interesting things is the thing that keeps me going.</li>\n\t\t\t\t\t<li>I also occasionally write Poetry.</li>\n\t\t\t\t</ul>';

function toggleImage () {
	let button = document.getElementById("togglePhoto");
	if (!button) return;
	if (button.innerHTML === '-') {
		document.getElementById("imageBlock").innerHTML = "";
		button.innerHTML = "+";
		button.setAttribute('title', "Show me Spandan");
	} else {
		document.getElementById("imageBlock").innerHTML = imageHTML;
		button.innerHTML = "-";
		buttonsetAttribute('title', "Toggle Photo Lol");
	}
};

function showWork () {
	document.getElementById("work").innerHTML = workHTML;
};

function showStrength () {
	document.getElementById("strength").innerHTML = strenHTML;
};

function showHobby () {
	document.getElementById("hobby").innerHTML = hobbyHTML;
};

function showAll () {
	showHobby();
	showWork();
	showStrength();
};

function onButtonHoverActivePassiveSwitch (calling) {
	if (!calling) return;
	let button = document.getElementById(calling);
	let toggleOptions = ["btn-secondary", "btn-primary"];
	if (!button.getAttribute('class')) return;
	let currentClass = button.getAttribute('class').substring(4);
	if (!toggleOptions.includes(currentClass)) return;
	button.setAttribute('class', `btn ${toggleOptions[toggleOptions.indexOf(currentClass) ^ 1]}`);
};
// Idk what else can i put for JS in this simple ass website :(
