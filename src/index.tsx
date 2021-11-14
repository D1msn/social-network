import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Store} from "./redux/state";


export const rerenderAppTree = () => {
	ReactDOM.render(
		<App Store={Store} dispatch={Store.dispatch.bind(Store)}/>,
		document.getElementById('root')
	);
}
rerenderAppTree()

Store.subscribe(rerenderAppTree);

