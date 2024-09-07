const say = require('say');

// Use default system voice and speed
// say.speak('Hello!');

// Stop the text currently being spoken
// say.stop();

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
    say.speak(data.joke, null, 0.90, (err) => {
      if (err) {
        return console.error(err);
      }
    })
  })
  .catch(error => {
    console.error(error);
  })

// // More complex example with a specific voice and speed
// say.speak("What's up, dog?", 'Alex', 0.75, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Text has been spoken.');
// });

// // Export spoken audio to a WAV file
// say.export("I'm sorry, Dave.", 'Cellos', 0.75, 'hal.wav', (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Text has been saved to hal.wav.');
// });
