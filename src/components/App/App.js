import React from "react";

import './App.css';

import Header from '../Header/Header';
import Templates from '../Templates/Templates';

function App() {
  return (
    <div className='flex flex-col mx-auto py-5 font-inter w-11/12'>
    	<Header />
    	<Templates />
    </div>
  );
}

export default App;
