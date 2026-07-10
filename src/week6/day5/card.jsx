function Cart({cart,increaseQuantity,decreaseQuantity,removeItem,total}) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />

              <div>
                <h3>{item.title}</h3>

                <p>₹{item.price}</p>

                <div className="quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <p>
                  Total: ₹{item.price * item.quantity}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2 className="grand-total">
            Grand Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;