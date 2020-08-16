const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Welcome to the updated container!'));
app.get('/test', (req, res) => res.send('test response'));
app.get('/example', (req, res) => res.send('example response'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))