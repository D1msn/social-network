import React from 'react';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import UsersContainer from './components/UsersPage/UsersContainer';

import './App.scss';


type AppTypes = {

}


const App: React.FC<AppTypes> = (props) => {
	return (
			<div className="App">
				<div className={"app-wrapper"}>
					<SideBar />
					<Header/>
					<div className={"main"}>
						<div className={"main__content"}>
							<Route path={"/profile"} render={() => <Profile />}/>
							<Route path={"/dialogs"} render={() => <DialogsContainer />}/>
							<Route path={"/users"} render={() => <UsersContainer />}/>
						</div>
					</div>
					<Footer/>
				</div>
			</div>
	);
}

export default App;
