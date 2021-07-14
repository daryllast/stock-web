import React, {useState, useEffect} from 'react';



function PortfolioBox(props) {

const [stock, setStock] = useState();
// const [stockSymbol, setStockSymbol] = useState();

const fetchStock = async () => {
    let res = await fetch(`http://localhost:3000/api/v1/portfolio`)
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

const sellStock = async (id) => {
    // let info = {symbol: result.symbol, quantity: quantity, price: result.price}
    let res = await fetch(`http://localhost:3000/api/v1/portfolio/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(info)
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
          
          {/* {stock && stock.map((stock) => {
                        return <tr key={stock.id}
                                   onClick={() => fetchStock(stock)}
                                   className={(selectedStock && (selectedStock.id == stock.id)) ?  'p-14 border-b text-3xl bg-gray-200' : 'p-14 border-b text-3xl'}>{portfolio.name}</tr>
                    })} */}

              

          <tbody>
          {stock && stock.map((stock) => {
            return <tr>
              <th scope="row">{stock.symbol}</th>
              <td>{stock.quantity}</td>
              <td>{stock.price}</td>
              <td><button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}onClick={() => sellStock(stock.id)}>Sell</button></td>
            </tr>
          })} 
            {/* <tr>
              <th scope="row">BHP</th>
              <td>50</td>
              <td>2000.00</td>
              <td><button className={'px-6 bg-pink-600 hover:bg-pink-700 text-white rounded py-3 mr-4'}onClick={() => sellStock(item.id)}>Sell</button></td>
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
            </tr> */}
          </tbody>
        </table>

       
      </div>

      

      <div className={'col-span-12 md:col-span-6 mt-5 flex justify-left'}>

      <div className={'col-span-12 md:col-span-6 mr-4 ml-4'}>
  
        </div>

        <div className={'hidden md:col-span-6 md:block'}>
          &nbsp;
        </div>

  
          


        </div>


    </div>


    </>
    );
}

export default PortfolioBox;
