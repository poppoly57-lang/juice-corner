import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ShopFilters from '../components/ShopFilters';
import ProductGrid from '../components/ProductGrid';
import freshBlendImage from '../assets/type.jpg';
import orangeImage from '../assets/lemo.jpg';
import juiceImage from '../assets/me.jpg';
import fruitImage from '../assets/pic.avif';
import freshJuiceImage from '../assets/juy.avif';
import displayImage from '../assets/disp.jpg';
import fruitStandImage from '../assets/busi.jpg';
import mixedFruitImage from '../assets/yummy.jpg';
import '../styles/ShopHeader.css';
import '../styles/ShopBrowsing.css';

const shopProducts = [
	{
		id: 'mango-juice',
		name: 'Mango Juice',
		description: 'Fresh and naturally sweet mango juice with a smooth tropical finish.',
		price: '$6.50',
		category: 'fruit',
		image: mixedFruitImage,
		alt: 'Fresh mango juice in a clear cup',
	},
	{
		id: 'passion-fruit-juice',
		name: 'Passion Fruit Juice',
		description: 'Bright, tangy, and refreshing with a vibrant tropical flavor.',
		price: '$6.75',
		category: 'tropical',
		image: fruitImage,
		alt: 'Passion fruit juice with colorful fruit in the background',
	},
	{
		id: 'pineapple-juice',
		name: 'Pineapple Juice',
		description: 'Light, juicy, and refreshing with a classic tropical taste.',
		price: '$6.25',
		category: 'tropical',
		image: juiceImage,
		alt: 'Fresh pineapple juice served in a juice bar',
	},
	{
		id: 'orange-juice',
		name: 'Orange Juice',
		description: 'Citrusy and naturally sweet with a clean, fresh finish.',
		price: '$5.50',
		category: 'citrus',
		image: orangeImage,
		alt: 'A glass of fresh orange juice with oranges',
	},
	{
		id: 'watermelon-juice',
		name: 'Watermelon Juice',
		description: 'Hydrating and crisp with a naturally light, refreshing flavor.',
		price: '$5.50',
		category: 'fruit',
		image: freshJuiceImage,
		alt: 'Fresh watermelon juice beside colorful fruit',
	},
	{
		id: 'tropical-blend',
		name: 'Tropical Blend',
		description: 'A balanced mix of tropical fruit flavors made for a bright sip.',
		price: '$7.00',
		category: 'tropical',
		image: displayImage,
		alt: 'A colorful selection of tropical juices and fruit',
	},
	{
		id: 'mango-passion-blend',
		name: 'Mango-Passion Blend',
		description: 'A juicy blend of mango and passion fruit with a smooth finish.',
		price: '$7.00',
		category: 'blend',
		image: freshBlendImage,
		alt: 'Mango and passion fruit juices in clear cups',
	},
	{
		id: 'pineapple-ginger-blend',
		name: 'Pineapple-Ginger Blend',
		description: 'Fresh pineapple and ginger for a crisp, lively flavor profile.',
		price: '$7.25',
		category: 'blend',
		image: fruitStandImage,
		alt: 'Refreshing pineapple and ginger juice served at a juice counter',
	},
];

const categories = [
	{ key: 'all', label: 'ALL JUICES' },
	{ key: 'fruit', label: 'FRUIT JUICES' },
	{ key: 'citrus', label: 'CITRUS' },
	{ key: 'tropical', label: 'TROPICAL' },
	{ key: 'blend', label: 'BLENDS' },
];

function ShopHeader() {
	return (
		<section className="shop-header" aria-labelledby="shop-header-title">
			<div className="shop-header-container">
				<p className="shop-header-label">OUR JUICES</p>
				<h1 className="shop-header-title" id="shop-header-title">FRESH FLAVORS, READY TO POUR.</h1>
				<p className="shop-header-description">
					Explore our selection of refreshing juices and find a flavor you'll love.
				</p>
			</div>
		</section>
	);
}

function Shop() {
	const navigate = useNavigate();
	const [selectedCategory, setSelectedCategory] = useState('all');

	const filteredProducts = shopProducts.filter((product) => {
		if (selectedCategory === 'all') return true;
		return product.category === selectedCategory;
	});

	const handleAddToCart = (product) => {
		window.dispatchEvent(new CustomEvent('cart:add', { detail: product }));
		navigate('/cart');
	};

	return (
		<>
			<Navigation />
			<ShopHeader />
			<section className="shop-browsing" aria-label="Shop browsing section">
				<div className="shop-browsing__inner">
					<ShopFilters
						categories={categories}
						selectedCategory={selectedCategory}
						onSelectCategory={setSelectedCategory}
					/>
					<ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Shop;
