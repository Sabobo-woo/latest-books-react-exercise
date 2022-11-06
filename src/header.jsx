export default function Header({ cart_items_nr }) {
    return (
        <header>
            Home
            <div className="cart">
                {cart_items_nr} Items in Cart
            </div>
        </header>
    )
}
