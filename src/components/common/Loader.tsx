import React from 'react';
import {ReactSVG} from "react-svg";

import loaderImg from '../../images/loader.svg'

type PropsType = {};

export const Loader: React.FC<PropsType> = () => {
	return (
		<>
			<ReactSVG src={loaderImg} className={"loader"}/>
		</>
	);
};
