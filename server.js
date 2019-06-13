//Install express server
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/issue-reader'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/issue-reader/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);