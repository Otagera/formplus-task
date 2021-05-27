import React, { Component } from 'react';

import Bar from './Bar';
import Sort from './Sort';

class Search extends Component {
    state = {

    }
	render(){
		return (
			<div className='mt-10 flex flex-col lg:flex-row space-between w-100 justify-between'>
				<Bar />
				<Sort />
			</div>
		);
	}
}
export default Search;