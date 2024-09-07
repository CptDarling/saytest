require('dotenv').config();

// override the platform
const Say = require('say').Say
const say = new Say('linux')

const categories = ["stupid", "ugly", "nasty", "hairy", "bald", "old", "poor", "short", "skinny", "tall"];
const category = categories[Math.floor(Math.random() * categories.length)];

fetch(`https://www.yomama-jokes.com/api/v1/jokes/${category}/random/`, {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    say.speak(data.joke, process.env.VOICE || 'default', process.env.SPEED || 1.0, (err) => {
      if (err) {
        return console.error(err);
      }
    })
  })
  .catch(error => {
    console.error(error);
  })
