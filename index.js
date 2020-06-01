require('dotenv').config();

const request = require('request');

let apiKey = process.env.OPEN_WEATHER_API_KEY;

let city = 'Providence';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
	let weather = JSON.parse(body)

	const tempKelvin = weather.main.temp;  
	// Temperature forecast in Celcius
	let celcius = Math.round(tempKelvin - 273);

	// Convert Celcius to Fahrenheit. Rounds down when a decimal is present.
	let fahrenheit = Math.floor(celcius * (9/5) + 32);

	let message = `It's ${fahrenheit} degrees Fahrenheit (${celcius} Celcius) in ${weather.name}!`;
console.log(message);}

});
