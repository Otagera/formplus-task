import React from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/outline';

const Message = ( props )=>{
	return (
		<div className='my-20 flex bg-orange-100 py-3 justify-around'>
			<div className='flex flex-row space-x-2'>
				<ExclamationCircleIcon className='w-20 h-20 lg:h-6 lg:w-6 text-btnOrange'/>
				<p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
			</div>
		</div>
	);
}
export default Message;