import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			testResponse: "",
		}
	}

	componentDidMount() {
		this.getTestResponse()
			.then(testResponse => this.setState({ testResponse }))
			.catch(err => console.log('ERR', err));
	}

	getTestResponse = async () => {
		const resp = await fetch('/api/ping');
		const body = await resp.json();
		if (resp.status !== 200) throw Error(body.message);
		return body;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						{this.state.testResponse}
					</p>
				</header>
			</div>
		);
	}
}

export default App;
