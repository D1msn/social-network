import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

  return (
	  <header className={"header"}>
		  <div className="logo">
			  <img
				  src={"https://images.vexels.com/media/users/3/229024/isolated/preview/8ecf77171634e86dec565891d993d35b-abstract-circle-logo-abstract.png"}
				  className={"logo__img"} alt={"Logo"}/>
		  </div>
	  </header>
  );
};

export default Header;
