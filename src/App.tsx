import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType, StoreType} from "./redux/stateTypes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.scss';


type AppTypes = {
	state: any
	Store: any
	dispatch: (action: ActionsTypes) => void
}


const App: React.FC<AppTypes> = ({Store,dispatch, state}) => {
	return (
		<BrowserRouter>
			<div className="App">
				<div className={"app-wrapper"}>
					<SideBar state={state.sideBar}/>
					<Header/>
					<div className={"main"}>
						<div className={"main__content"}>
							<Route path={"/profile"} render={() => <Profile state={state.profilePage} dispatch={dispatch} />}/>
							<Route path={"/dialogs"} render={() => <Dialogs state={state.dialogsPage} dispatch={dispatch} />}/>
						</div>
					</div>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
