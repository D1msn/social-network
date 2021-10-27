import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className={"app-wrapper"}>
					<SideBar/>
					<Header/>
					<div className={"main"}>
						<div className={"main__content"}>
							<Route path={"/profile"} component={Profile}/>
							<Route path={"/dialogs"} component={Dialogs}/>
						</div>
					</div>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
