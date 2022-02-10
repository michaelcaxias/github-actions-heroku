const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <img src="https://i.pinimg.com/originals/60/98/c2/6098c221cb9dba63fcd3d201c83ca2f3.jpg" alt="cat meme">
    <h1>Hello World</h1>
  `);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
