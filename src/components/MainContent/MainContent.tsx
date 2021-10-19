import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import PostBLock from "./PostBlock/PostBlock";

import './MainContent.scss'

const MainContent = () => {

	return (
		<div className={"main"}>
			<Sidebar/>
			<div className={"content"}>
				<div className={"content__banner"}>
					<img src={"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
				</div>
				<Profile/>
				<PostBLock/>
			</div>
		</div>

	);
};

export default MainContent;
