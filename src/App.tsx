import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {StateType, StoreType} from "./redux/stateTypes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Dialogs from "./components/Dialogs/Dialogs";

import './App.scss';


type AppTypes = {
	Store: StoreType
}


const App: React.FC<AppTypes> = ({Store}) => {
	const State = Store.getState()

	return (
		<BrowserRouter>
			<div className="App">
				<div className={"app-wrapper"}>
					<SideBar state={State.sideBar}/>
					<Header/>
					<div className={"main"}>
						<div className={"main__content"}>
							<Route path={"/profile"} render={() => <Profile state={State.profilePage} addPost={Store.addPost.bind(Store)} changeNewPostText={Store.changeNewPostText.bind(Store)} />}/>
							<Route path={"/dialogs"} render={() => <Dialogs state={State.dialogsPage} />}/>
						</div>
					</div>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
