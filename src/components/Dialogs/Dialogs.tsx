import React from 'react';
import {NavLink} from 'react-router-dom';

import './Dialogs.scss';

const Dialogs = () => {

	return (
		<div className="dialogs-wrapper">
			<div className="dialogs">
				<ul className="dialogs__list">
					<li className="dialogs__item">
						<NavLink to="/dialogs/1">
							Дима
						</NavLink>
					</li>
					<li className="dialogs__item">
						<NavLink to="/dialogs/2">
							Дима 1
						</NavLink>
					</li>
					<li className="dialogs__item">
						<NavLink to="/dialogs/3">
							Дима 2
						</NavLink>
					</li>
					<li className="dialogs__item">
						<NavLink to="/dialogs/4">
							Дима 3
						</NavLink>
					</li>
					<li className="dialogs__item">
						<NavLink to="/dialogs/5">
							Дима 4
						</NavLink>
					</li>
					<li className="dialogs__item">
						<NavLink to="/dialogs/6">
							Дима 5
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="messages">
				<ul className="messages__list">
					<li className="messages__item">
						Yo
					</li>
					<li className="messages__item">
						Привет
					</li>
					<li className="messages__item">
						Как дела
					</li>
					<li className="messages__item">
						Е
					</li>
					<li className="messages__item">
						Давай давай
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dialogs;
