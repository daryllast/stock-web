import React, {useState, useEffect} from 'react';



function PortfolioBox(props) {

const [stock, setStock] = useState();
const [stockSymbol, setStockSymbol] = useState();

const fetchStock = async () => {
    let res = await fetch('http://localhost:3000/api/v1/portfolio')
    let data = await res.json()
    console.log(data)
    setStock(data)
};

useEffect(() => {
    console.log('run this only once when the page loads up')
    fetchStock()
}, []);

const [stockSymbol, setStockSymbol] = useState('');
 const [result, setResult] = useState({symbol: '', price: ''});

 const [quantity, setQuantity] = useState(); 

const sellStock = async () => {
    let info = {symbol: result.symbol, quantity: quantity, price: result.price}
    let res = await fetch('http://localhost:3000/api/v1/portfolio/:id', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    let data = await res.json()
    console.log('the data is', data)
    setQuantity('')
    setResult({symbol: '',quantity: '', price: ''})
    setStockSymbol('')

};




 
    return (
        <>

        

<div className={'col-span-12 md:col-span-5 border bg-gray-50 h-96'}>

      <h1 className={'text-4xl text-center'}>Portfolio</h1>

 

      <div class="table-responsive">
        <table class="table table-hover table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Stock</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value</th>
              <th scope="col">Sell</th>
            </tr>
          </thead>
          
          {stock && stock.map((stock) => {
                        return <th key={stock.id}{stock.stockSymbol}
                                   onClick={() => fetchStock(stock)}
                                   className={(selectedStock && (selectedStock.id == stock.id)) ?  'p-14 border-b text-3xl bg-gray-200' : 'p-14 border-b text-3xl'}>{portfolio.name}</th>
                    })}
          <tbody>
            <tr>
              <th scope="row" placeholder={'Stock Symbol'}onChange={(event => setStockSymbol(event.currentTarget.value)}>{stockSymbol}</th>/th>
              <td>50</td>
              <td>2000.00</td>
              <td><button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}onClick={sellStock}>Sell</button></td>
            </tr>
            <tr>
              <th scope="row">NAB</th>
              <td>30</td>
              <td>1200.00</td>
              <td><button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}onClick={sellStock}>Sell</button></td>
            </tr>
            <tr>
            <th scope="row">Cash</th>
              <td></td>
              <td>8200.00</td>
              <td><button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}onClick={sellStock}>Sell</button></td>
            </tr>
          </tbody>
        </table>

       
      </div>

      

      <p className= 'ml-4'><strong>NAB</strong>: you have 30 shares at $40.00 per share.</p>

      <div className={'col-span-12 md:col-span-6 mt-5 flex justify-left'}>

      <div className={'col-span-12 md:col-span-6 mr-4 ml-4'}>
          <input type="search" className={'border w-full p-1 rounded-r-2xl rounded-l-2xl'} />
        </div>

        <div className={'hidden md:col-span-6 md:block'}>
          &nbsp;
        </div>

  
          <button className={'px-6 bg-yellow-400 hover:bg-yellow-200 text-white rounded py-3 mr-4'}>Buy</button>

          <button className={'px-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white rounded py-3 mr-4'}>OK</button>


        </div>


    </div>


    </>
    );
}

export default PortfolioBox;
