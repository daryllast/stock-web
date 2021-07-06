import logo from './logo.svg';
import './App.css';



function App() {
return (
<>

  <div className={'grid grid-cols-12'}>

    <div className={'col-span-12 border p-10 bg-gray-50 text-center'}>

      <h1 className={'text-4x'}>Paper Trader</h1>

    </div>


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

    <div className={'col-span-12 md:col-span-5 border bg-gray-50 h-96'}>

      <h1 className={'text-4xl text-center'}>Portfolio</h1>

 

      <div class="table-responsive">
        <table class="table table-hover table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Stock</th>
              <th scope="col">Quantity</th>
              <th scope="col">Value</th>
              <th scope="col">Buy / Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">BHP</th>
              <td>50</td>
              <td>2000.00</td>
              <td>Sell</td>
            </tr>
            <tr>
              <th scope="row">NAB</th>
              <td>30</td>
              <td>1200.00</td>
              <td>Buy</td>
            </tr>
            <tr>
            <th scope="row">Cash</th>
              <td></td>
              <td>8200.00</td>
              <td></td>
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


  </div>



</>

);
}

export default App;




// <div className="App">
  // <header className="App-header">
    // <img src={logo} className="App-logo" alt="logo" />
    // <p>
      // Edit <code>src/App.js</code> and save to reload.
      // </p>
    // <a // className="App-link" // href="https://reactjs.org" // target="_blank" // rel="noopener noreferrer" //>
      // Learn React
      // </a>
    // </header>
  // </div>