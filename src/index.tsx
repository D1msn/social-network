import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import { store } from './redux/redux-store';
import {StateType} from "./redux/storeTypes";
import './index.css';
import { Provider } from 'react-redux';


export const rerenderAppTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
rerenderAppTree()

store.subscribe(() => {
	let state = store.getState()
	rerenderAppTree()
});

