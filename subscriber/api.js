const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  params: {q: 'tesla', region: 'US'},
  headers: {
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});