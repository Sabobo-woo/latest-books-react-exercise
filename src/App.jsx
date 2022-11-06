import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Book from './book';
import Header from './header';

function App() {

  const [book_data, setBookData] = useState(null);
  const [cart, setCart] = useState([])

  const loadBookData = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php')
    const data = await response.json()
    setBookData(data)

  }

  useEffect(() => {
    loadBookData()

  }, [])

  const addItemToCart = (book_id) => {
    setCart([...cart, book_id]

    )

  }


  const removeItemFromCart = (book_id) => {
    // prepare a copy of the current state
    // of the cart (so that we don't change it)
    const copy = [...cart];

    // try to find the first occurence of this
    // book_id in the copy
    const found_at_index = copy.indexOf(book_id);

    // if found...
    if (found_at_index !== -1) {
      // ...remove it from the array
      // (this changes the array which is why we
      // did not want to do it on `cart`)
      copy.splice(found_at_index, 1);
    }

    // update the state with the new "cart" array,
    // sans the first found occurence of this book_id
    setCart(copy)
  }



  return (
    <div className="App">
      <Header cart_items_nr={cart.length} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Latest Books</h3>
        {/* <button onClick={() => addItemToCart(123)}>Add 123 to cart</button> */}
        {/* <button onClick={loadBookData}>Load data</button> */}
        <ul className='book-list'>
          {
            book_data === null
              ? <li>Loading..</li>
              : book_data.map(book => {
                return <Book key={book.id} book={book} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />


              })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;