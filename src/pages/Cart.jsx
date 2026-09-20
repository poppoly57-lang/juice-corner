import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
	const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
	const total = subtotal;

	return (
		<>
			<Navigation />
			<main className="cart-page">
				<div className="cart-page__container">
					<div className="cart-page__header">
						<h1 className="cart-page__title">Your cart</h1>
					</div>

					{items.length === 0 ? (
						<div className="empty-cart">
							<h2 className="empty-cart__title">Your cart is empty</h2>
							<p className="empty-cart__text">
								Pick your favorite fresh juices and head back to the shop to build your order.
							</p>
							<Link className="cart-button" to="/shop">Continue Shopping</Link>
						</div>
					) : (
						<div className="cart-page__content">
							<div className="cart-items">
								{items.map((item) => {
									const itemTotal = Number.parseFloat(item.price.replace('$', '')) * item.quantity;
									return (
										<div className="cart-item" key={item.id}>
											<div className="cart-item__image-wrap">
												<img className="cart-item__image" src={item.image} alt={item.alt || item.name} />
											</div>
											<div className="cart-item__details">
												<h2 className="cart-item__name">{item.name}</h2>
												<span className="cart-item__price">{item.price}</span>
												<div className="cart-item__meta">
													<div className="cart-item__qty" aria-label={`Quantity for ${item.name}`}>
														<button type="button" aria-label={`Decrease quantity of ${item.name}`} onClick={() => updateQuantity(item.id, -1)}>-</button>
														<span className="cart-item__qty-value">{item.quantity}</span>
														<button type="button" aria-label={`Increase quantity of ${item.name}`} onClick={() => updateQuantity(item.id, 1)}>+</button>
													</div>
													<button className="cart-item__remove" type="button" onClick={() => removeItem(item.id)}>Remove</button>
												</div>
											</div>
											<div className="cart-item__subtotal">${itemTotal.toFixed(2)}</div>
										</div>
									);
									})}
							</div>

							<aside className="cart-summary">
								<h2 className="cart-summary__title">Order summary</h2>
								<div className="cart-summary__line">
									<span>Subtotal</span>
									<span>${subtotal.toFixed(2)}</span>
								</div>
								<div className="cart-summary__line cart-summary__line--total">
									<span>Total</span>
									<span>${total.toFixed(2)}</span>
								</div>
								<div className="cart-summary__actions">
									<Link className="cart-link" to="/shop">Continue Shopping</Link>
											{items.length > 0 && <button className="cart-button cart-button--secondary" type="button" onClick={clearCart}>Clear cart</button>}
									<button className="cart-button" type="button">Checkout</button>
								</div>
							</aside>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Cart;
