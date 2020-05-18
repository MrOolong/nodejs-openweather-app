require('dotenv').config();

const request = require('request');

let apiKey = process.env.OPEN_WEATHER_API_KEY;

let city = 'Providence';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
