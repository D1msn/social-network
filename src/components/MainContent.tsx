import React from 'react';
import Sidebar from "./Sidebar";


const MainContent = () => {

	return (
		<div className={"main"}>
			<Sidebar/>
			<div className={"content"}>
				<div className={"content__banner"}>
					<img src={"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
				</div>

				<div className={"profile-info content__profile-info"}>
					<div className={"profile-info__avatar"}>
						<img src={""} alt={"AVATAR"}/>
					</div>
					<div className={"profile-info__descr"}>
						asdasd
					</div>
				</div>

				<div className={"content__post-block post-block"}>
					<h2 className={"post-block__title"}>My posts</h2>
					<div className={"post-block__create"}>
						<input className={"post-block__input"}/>
						<button className={"post-block__btn"}>Send</button>
					</div>
					<ul className={"post-block__list"}>
						<li className="post-block__item">Hello</li>
					</ul>
				</div>
			</div>
		</div>

	);
};

export default MainContent;
