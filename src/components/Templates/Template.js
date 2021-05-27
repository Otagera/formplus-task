import React from 'react';

const Template = ( props )=>{
	const { templateData } = props;
	//console.log(templateData);
	const { name, description, link } = templateData;
	return (
		<article className='my-5 pt-7 shadow-xl md:w-1/2 lg:w-96'>
			<div className='px-7'>
				<h4 className='font-bold text-xl pb-5'>{name}</h4>
				<p className='py-5'>{description} ...</p>
			</div>
			<div className='text-lime-400 bg-gray-100 p-3'>
				<a href={`${link}`}>Use Template</a>
			</div>
		</article>  
	);
}
export default Template;