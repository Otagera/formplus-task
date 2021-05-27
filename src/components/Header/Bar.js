import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchTemplatesByName } from '../../redux/actions/templates';

import { SearchIcon } from '@heroicons/react/outline';

const Bar = ( props )=>{
	const [searchQuery, setSearchQuery] = useState('');
	const dispatch = useDispatch();
	const handleChange = (e)=>{
		switch (e.target.name){
			case 'SearchQuery':
				setSearchQuery(e.target.value);
				dispatch(searchTemplatesByName(e.target.value));
				break;
			default:
				break;
		}
	}
	return (
		<div className='m-2 px-5 py-3 border flex flex-row focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent'>
			<input 
				className='pl-3 bg-white bg-opacity-5 rounded-sm text-gray focus:border-none focus:outline-none'
				type="text"
				name='SearchQuery'
				value={searchQuery}
				onChange={handleChange}
				placeholder="Search Templates"/>			
			<SearchIcon className='h-5 w-5 text-gray' />
		</div>
	);
}
//m-2 px-5 py-4
export default Bar;