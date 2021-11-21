import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import { store } from './redux/redux-store';
import { Provider } from './StoreContext';
import {StateType} from "./redux/stateTypes";
import './index.css';


export const rerenderAppTree = (state: StateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
rerenderAppTree(store.getState())

store.subscribe(() => {
	let state = store.getState()
	rerenderAppTree(state)
});

