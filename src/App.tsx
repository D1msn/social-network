import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
	return (
		<div className="App">
			<div className={"app-wrapper"}>
				<Header/>
				<MainContent/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
