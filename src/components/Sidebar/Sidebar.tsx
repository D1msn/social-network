import React from 'react';

import './Sidebar.scss';

const Sidebar = () => {

  return (
	  <nav className="sidebar ">
		  <ul className="sidebar__links">
			  <li className="sidebar__link"><a href="#">Profile</a></li>
			  <li className="sidebar__link"><a href="#">Messages</a></li>
			  <li className="sidebar__link"><a href="#">News</a></li>
			  <li className="sidebar__link"><a href="#">Music</a></li>
			  <li className="sidebar__link"><a href="#">Settings</a></li>
		  </ul>
	  </nav>
  );
};

export default Sidebar;
