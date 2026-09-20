import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'juice-corner-cart';

const normalizeProduct = (product) => ({
	id: String(product.id),
	name: product.name,
	price: String(product.price),
	image: product.image,
	alt: product.alt || product.name,
	quantity: Number(product.quantity) > 0 ? Number(product.quantity) : 1,
});

export function CartProvider({ children }) {
	const [items, setItems] = useState(() => {
		if (typeof window === 'undefined') {
			return [];
		}

		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			const parsed = raw ? JSON.parse(raw) : [];
			return Array.isArray(parsed) ? parsed.map(normalizeProduct) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		}
	}, [items]);

	useEffect(() => {
		const handleCartAdd = (event) => {
			const product = event.detail;
			if (!product) return;
			addItem(product);
		};

		window.addEventListener('cart:add', handleCartAdd);
		return () => window.removeEventListener('cart:add', handleCartAdd);
	}, []);

	const addItem = (product) => {
		const normalized = normalizeProduct(product);
		const quantityToAdd = normalized.quantity || 1;
		setItems((current) => {
			const existing = current.find((item) => item.id === normalized.id);
			if (existing) {
				return current.map((item) =>
					item.id === normalized.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
				);
			}
			return [...current, { ...normalized, quantity: quantityToAdd }];
		});
	};

	const updateQuantity = (id, delta) => {
		setItems((current) =>
			current
				.map((item) =>
					item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const removeItem = (id) => {
		setItems((current) => current.filter((item) => item.id !== id));
	};

	const clearCart = () => setItems([]);

	const itemCount = useMemo(
		() => items.reduce((sum, item) => sum + item.quantity, 0),
		[items]
	);

	const subtotal = useMemo(
		() => items.reduce((sum, item) => sum + Number.parseFloat(item.price.replace('$', '')) * item.quantity, 0),
		[items]
	);

	const value = {
		items,
		addItem,
		updateQuantity,
		removeItem,
		clearCart,
		itemCount,
		subtotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used inside a CartProvider');
	}
	return context;
}
