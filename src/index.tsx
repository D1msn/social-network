import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/redux-store';


export const rerenderAppTree = (state: any) => {
	ReactDOM.render(
		<App state={state} Store={store} dispatch={store.dispatch.bind(store)}/>,
		document.getElementById('root')
	);
}
rerenderAppTree(store.getState())

store.subscribe(() => {
	let state = store.getState()
	rerenderAppTree(state)
});

