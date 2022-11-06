import './book.scss';
import { useState } from 'react';


export default function Book({ book, addItemToCart, removeItemFromCart }) {

    const [amountInCart, setAmountInCart] = useState(0)

    const addToCart = () => {
        setAmountInCart(amountInCart + 1)
        addItemToCart(book.id)
    }

    const removeFromCart = () => {
        setAmountInCart(Math.max(0, amountInCart - 1))
        removeItemFromCart(book.id)
    }

    // const book = props.book;
    // const style = {
    //     width: '3em',
    //     border: '1px solid black'
    // }

    // if (book.id == 19898) {
    //     style.borderColor = 'red';
    // }


    return (<li className='book' key={book.id}>{book.title}
        <img src={book.image} alt={book.title + 'cover'} style={{ width: '3em', border: '1px solid black' }}></img>
        <div className='book-in-cart'>
            <button onClick={removeFromCart}>-</button>{amountInCart}
            <button onClick={addToCart}>+</button></div>

    </li >)
}