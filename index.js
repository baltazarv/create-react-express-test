// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3
// https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.get('/api/ping', (req, res) => {
	console.log('pong');
	res.json('pong');
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
