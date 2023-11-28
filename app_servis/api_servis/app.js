const express = require('express');
const app = express();
app.get('/', (req, res) => { res.send('Hello from REST API service')});
app.listen(9000);