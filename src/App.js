import './App.css';
import Navbar from "./navbar";
import SearchBox from "./search-box";
import PortfolioBox from "./portfolio-box";


function App() {
return (
<>

  <div className={'grid grid-cols-12'}>

   
   <Navbar />

   <SearchBox />   

   <PortfolioBox />


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