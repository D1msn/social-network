import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className={"app-wrapper"}>
				<header className={"header"}>
					<div className="logo">
						<img
							src={"https://images.vexels.com/media/users/3/229024/isolated/preview/8ecf77171634e86dec565891d993d35b-abstract-circle-logo-abstract.png"}
							className={"logo__img"} alt={"Logo"}/>
					</div>
				</header>

				<div className={"main"}>
					<nav className="sidebar ">
						<ul className="sidebar__links">
							<li className="sidebar__link"><a href="#">Profile</a></li>
							<li className="sidebar__link"><a href="#">Messages</a></li>
							<li className="sidebar__link"><a href="#">News</a></li>
							<li className="sidebar__link"><a href="#">Music</a></li>
							<li className="sidebar__link"><a href="#">Settings</a></li>
						</ul>
					</nav>

					<div className={"content"}>
						<div className={"content__banner"}>
							<img
								src={"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"}/>
						</div>

						<div className={"profile-info content__profile-info"}>
							<div className={"profile-info__avatar"}>
								<img src={""} alt={"AVATAR"} />
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

				<footer className={"footer"}>
					Copyright 2021
				</footer>


			</div>
		</div>
	);
}

export default App;
