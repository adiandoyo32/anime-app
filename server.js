var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();

app.use(serveStatic(__dirname + "/build"));
var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is running on port 5000');
    console.log('Access on http://localhost:5000');
});