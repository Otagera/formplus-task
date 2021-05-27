import React, { Component } from 'react';

import Search from './Search';
import Message from './Message';

class Header extends Component {
    state = {

    }
	render(){
		return (
			<>
				<Search />
				<Message />
			</>
		);
	}
}
export default Header;