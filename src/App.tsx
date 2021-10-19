import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

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
