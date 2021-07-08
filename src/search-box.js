import React, {useState, useEffect} from 'react';

function SearchBox(props) {
return (
    <>

 <div className={'col-span-12 md:col-span-7 border h-96 p-10 bg-gray-50'}>
      {/*<h1 className={'text-4xl'}>Search Box</h1>*/}

      

      <div className={'grid grid-cols-12'}>
        <div className={'col-span-12 md:col-span-6'}>
       
        <input type="search" className={'border w-2/3 mr-4 p-1 rounded-r-2xl rounded-l-2xl'}/>

           <button className={'px-6 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded py-2 mr-3'}>Search</button>
       
        </div>

     

        <div className={'hidden md:col-span-6 md:block'}>
          &nbsp;
        </div>

        <div className={'col-span-12 md:col-span-6 mt-5 text-center md:text-left'}>
          <h1 className={'text-2xl'}>BHP - BHP Group Limited</h1>
        </div>

        <div className={'col-span-12 md:col-span-6 mt-5 flex justify-center'}>

          <button className={'px-6 bg-yellow-400 hover:bg-yellow-200 text-white rounded py-3 mr-4'}>Buy</button>

          <button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}>Sell</button>


        </div>
      </div>




    </div>

    </>
    );
}

export default SearchBox;
