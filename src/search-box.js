
import React, {useState, useEffect} from 'react';

function SearchBox(props) {

 const [stockSymbol, setStockSymbol] = useState('');
 const [result, setResult] = useState({symbol: '', price: ''});

 const [quantity, setQuantity] = useState();

 const onStockSymbolChange = async(event) => {
setStockSymbol(event.currentTarget.value)
 };

 const searchStock = async() => {
 console.log('searchStock was called')
 let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/search/${stockSymbol}`)
 let data = await res.json()
 console.log('data is', data)
 setResult({symbol: stockSymbol, price: data.price})
 };

 const buyStock = async () => {
    let info = {symbol: result.symbol, quantity: quantity, price: result.price}
    let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/portfolio`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
       
    })
    let data = await res.json()
    console.log('the data is from buy stock', data)
    setQuantity('')
    setResult({symbol: '', price: ''})
    setStockSymbol('')

};


return (
    <>

 <div className={'col-span-12 md:col-span-7 border h-96 p-10 bg-gray-50'}>
      {/*<h1 className={'text-4xl'}>Search Box</h1>*/}

    

      <div className={'grid grid-cols-12'}>
        <div className={'col-span-12 md:col-span-6'}>
       
        <input value={stockSymbol} onChange={onStockSymbolChange} type="search" className={'border w-2/3 mr-4 p-1 rounded-r-2xl rounded-l-2xl'}/>

           <button onClick={searchStock} className={'px-6 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded py-2 mr-3'}>Search</button>
       
        </div>

     

        <div className={'hidden md:col-span-6 md:block'}>
          &nbsp;
        </div>

        <div className={'col-span-12 md:col-span-6 mt-5 text-center md:text-left'}>
        <h1 className={'text-2xl font-bold tracking-wider'}>{result.symbol}</h1>
          {result && <h4 className={'text-lg font-medium text-left'}>${result.price}</h4>}
        </div>

        <div className={'col-span-12 md:col-span-6 mt-5 flex justify-center'}>

        <div className={'col-span-12 md:col-span-6 mr-4 ml-4'}>

        {result.symbol && <input onChange={(event) => setQuantity(event.currentTarget.value)} type="number" className={'border w-full p-1 rounded-r-2xl rounded-l-2xl'}/>}
        </div>


          <button className={'px-6 bg-yellow-400 hover:bg-yellow-200 text-white rounded py-2 mr-3'}onClick={buyStock}>Buy</button>

          {/* <button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}>Sell</button> */}



        </div>
      </div>


    </div>

    </>
    );
}

export default SearchBox;
