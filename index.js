// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/pong', (req, res) => {
	res.json('pong');
	console.log('pong');
});

app.get('/api/ping', function(req, res) {
	return res.send('pong');
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
