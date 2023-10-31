const express = require('express');
const path = require('path');
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.listen(8000);
app.use(express.static(path.join(__dirname, 'static')));