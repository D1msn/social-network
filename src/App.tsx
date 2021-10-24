import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/MainContent/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
	return (
		<div className="App">
			<div className={"app-wrapper"}>
				<Sidebar/>
				<Header/>
				<div className={"main"}>
					<div className={"main__content"}>
						<Profile/>
						<Dialogs/>
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
