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
		this.getTestResponse();
	}

	// Retrieves the list of items from the Express app
	getTestResponse = () => {
		fetch('/api/pong')
			.then(res => res.json())
			.then(testResponse => this.setState({ testResponse }))
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
