import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, setSelectedCategory, setSelectedOrder, setSelectedDate } from '../../redux/actions/templates';

const Sort = ( props )=>{
	const [category, setCategory] = useState('All');
	const [order, setOrder] = useState('Default');
	const [date, setDate] = useState('Default');

	const dispatch = useDispatch();
	const templatesStore = useSelector((state) => state.templates);
	const { 
		categories, orders, dates
	} = templatesStore;

	useEffect(()=>{
	  	dispatch(getCategories());
	});

	const handleChange = (e)=>{
		switch (e.target.name){
			case 'Category':
				setCategory(e.target.value);
				setOrder('Default');
				setDate('Default');
				dispatch(setSelectedCategory(e.target.value));
				break;
			case 'Order':
				setOrder(e.target.value);
				dispatch(setSelectedOrder(e.target.value));
				break;
			case 'Date':
				setDate(e.target.value);
				dispatch(setSelectedDate(e.target.value));
				break;
			default:
				break;
		}
	}
	return (
		<div className='flex flex-col md:flex-row space-y-8 md:space-x-8 py-3 m-auto'>
			<p className='py-5'>Sort By:</p>
			<div className='px-5 border rounded-sm w-max h-10 relative'>
				<label htmlFor="Category" className='absolute -top-2.5 left-2.5 z-10 bg-white h-auto text-xs'>Category</label>
				<select
					onChange={handleChange}
					value={category}
					name='Category'
					className='my-3' >
					{
						categories.map(cat=>{
							return <option value={cat} key={cat} defaultValue={(cat === "All")}>{cat}</option>
						})
					}
				</select>
			</div>
			<div className='px-5 border rounded-sm w-max h-10 relative'>
				<label htmlFor="Order" className='absolute -top-2.5 left-2.5 z-10 bg-white h-auto text-xs'>Order</label>
				<select
					value={order}
					onChange={handleChange}
					name='Order'
					className='my-3' >
					{
						orders.map(ord=>{
							return <option value={ord} key={ord} defaultValue={(ord === "Defaultt")}>{ord}</option>
						})
					}
				</select>
			</div>
			<div className='px-5 border rounded-sm w-max h-10 relative'>
				<label htmlFor="Date" className='absolute -top-2.5 left-2.5 z-10 bg-white h-auto text-xs'>Date</label>
				<select
					value={date}
					onChange={handleChange}
					name='Date'
					className='my-3' >
					{
						dates.map(dat=>{
							return <option value={dat} key={dat} defaultValue={(dat === "Defaultt")}>{dat}</option>
						})
					}
				</select>
			</div>
		</div>
	);
}
export default Sort;