const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from nodejs-v2!');
});

app.listen(port, () => {
  console.log(`nodejs-v2 running on http://localhost:${port}`)
});
