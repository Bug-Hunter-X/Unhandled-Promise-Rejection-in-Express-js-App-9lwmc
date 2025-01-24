const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve();
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}