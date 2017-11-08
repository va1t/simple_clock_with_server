const express = require('express');
const helper = require('./helper.js');

const app = express();

app.use(express.static('public'));


app.get('/time', (req, res)=> {
  
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});