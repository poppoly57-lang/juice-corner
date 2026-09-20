import ProductCard from './ProductCard';

function ProductGrid({ products, onAddToCart }) {
	if (!products.length) {
		return <p className="shop-grid__empty">No juices match this selection.</p>;
	}

	return (
		<div className="shop-grid">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
			))}
		</div>
	);
}

export default ProductGrid;
