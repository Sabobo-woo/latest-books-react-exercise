import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Products from './productlist';
import './design/css/main.css'

function App() {
  return (
    <div id="page">

      <Header />

      <div id="main">
        <nav className="filter">
          <label htmlFor="filter">Filter</label>
          <input type="text" name="filter" id="filter" placeholder="enter search term" />
        </nav>

        <div className="content">
          <h1>Products</h1>

          <Products />

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
