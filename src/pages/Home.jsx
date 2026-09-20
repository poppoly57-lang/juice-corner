import { Link, useNavigate } from 'react-router-dom';
import '../styles/VideoBarner.css';
import '../styles/BrandIntro.css';
import '../styles/Favorites.css';
import '../styles/Freshness.css';
import '../styles/Categories.css';
import '../styles/Story.css';
import '../styles/Reviews.css';
import FinalCTA from '../components/FinalCTA';
import logo from '../assets/logo.jpeg';
import mixedFruitImage from '../assets/yummy.jpg';
import freshBlendImage from '../assets/type.jpg';
import orangeImage from '../assets/lemo.jpg';
import juiceBarImage from '../assets/juice.jpg';
import fruitStandImage from '../assets/busi.jpg';
import fruitImage from '../assets/pic.avif';
import juiceImage from '../assets/me.jpg';
import freshJuiceImage from '../assets/juy.avif';
import displayImage from '../assets/disp.jpg';

const favoriteProducts = [
	{
		id: 'mango-juice',
		name: 'Mango Juice',
		description: 'Fresh and naturally sweet mango juice.',
		price: '$6.50',
		image: freshBlendImage,
		alt: 'Fresh mango and fruit juices in clear cups',
	},
	{
		id: 'passion-fruit-juice',
		name: 'Passion Fruit Juice',
		description: 'Refreshing passion fruit juice with a bright, tangy taste.',
		price: '$6.75',
		image: fruitImage,
		alt: 'Colorful fresh fruit juices surrounded by fruit',
	},
	{
		id: 'pineapple-juice',
		name: 'Pineapple Juice',
		description: 'Fresh pineapple juice with a naturally tropical flavor.',
		price: '$6.25',
		image: juiceImage,
		alt: 'Fresh pineapple juice served at a juice bar',
	},
	{
		id: 'watermelon-juice',
		name: 'Watermelon Juice',
		description: 'Light and refreshing watermelon juice.',
		price: '$5.50',
		image: freshJuiceImage,
		alt: 'Fresh watermelon beside colorful fruit juices',
	},
	{
		id: 'orange-juice',
		name: 'Orange Juice',
		description: 'Fresh orange juice with a bright citrus taste.',
		price: '$5.50',
		image: orangeImage,
		alt: 'A glass of fresh orange juice with oranges',
	},
	{
		id: 'mixed-fruit-juice',
		name: 'Mixed Fruit Juice',
		description: 'A refreshing combination of selected fruits.',
		price: '$7.00',
		image: displayImage,
		alt: 'A colorful selection of fresh juices and fruit',
	},
	{
		id: 'pineapple-mint',
		name: 'Pineapple & Mint',
		description: 'A refreshing pineapple blend with a light mint touch.',
		price: '$6.75',
		image: fruitStandImage,
		alt: 'Refreshing pineapple juice served in a juice bar',
	},
	{
		id: 'mango-passion',
		name: 'Mango & Passion',
		description: 'A fruity combination of mango and passion fruit.',
		price: '$7.00',
		image: mixedFruitImage,
		alt: 'Mango and passion fruit juices in clear cups',
	},
];

function addProductToCart(product, navigate) {
	window.dispatchEvent(new CustomEvent('cart:add', { detail: product }));
	if (navigate) {
		navigate('/cart');
	}
}

function Home() {
	const navigate = useNavigate();
	return (
		<main>
			<section className="video-barner" id="home" aria-labelledby="video-barner-title">
				<video
					className="video-barner-video"
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					poster={logo}
				>
					<source src="/videos/juice-corner-hero.mp4" type="video/mp4" />
					Your browser does not support the video element.
				</video>

				<div className="video-barner-overlay" aria-hidden="true" />

				<div className="video-barner-content">
					<p className="video-barner-kicker">Juice Corner</p>
					<h1 className="video-barner-title" id="video-barner-title">
						Fresh fruit.
						<span>Real flavor.</span>
					</h1>
					<p className="video-barner-text">
						Made with fresh fruits and blended for a naturally refreshing taste.
					</p>
					<div className="video-barner-actions">
						<Link className="video-barner-button video-barner-button--primary" to="/shop">
							Shop our juices
						</Link>
						<Link className="video-barner-button video-barner-button--secondary" to="/about">
							Our story
						</Link>
					</div>
				</div>
			</section>

			<section className="brand-intro" aria-labelledby="brand-intro-title">
				<div className="brand-intro-content">
					<p className="brand-intro-label">The Juice Corner way</p>
					<h2 className="brand-intro-title" id="brand-intro-title">
						A little freshness goes a long way.
					</h2>
					<p className="brand-intro-text">
						At Juice Corner, we keep things simple — fresh fruits, good combinations, and juice made to be enjoyed.
					</p>
					<p className="brand-intro-highlight">Fresh • Natural • Delicious</p>
				</div>
			</section>

			<section className="favorites-section" aria-labelledby="favorites-title">
				<div className="favorites-header">
					<p className="favorites-label">Our favorites</p>
					<h2 className="favorites-title" id="favorites-title">Fresh picks, made for you.</h2>
					<p className="favorites-description">
						Discover some of our refreshing favorites, made with fresh ingredients and great combinations.
					</p>
				</div>

				<div className="favorites-grid">
					{favoriteProducts.map((product) => (
						<article className="favorite-product-card" key={product.id}>
							<div className="favorite-product-image-wrap">
								<img className="favorite-product-image" src={product.image} alt={product.alt} />
							</div>
							<div className="favorite-product-info">
								<div className="favorite-product-heading">
									<h3 className="favorite-product-name">{product.name}</h3>
									<span className="favorite-product-price">{product.price}</span>
								</div>
								<p className="favorite-product-description">{product.description}</p>
								<button
									className="favorite-add-cart"
									type="button"
									onClick={() => addProductToCart(product, navigate)}
								>
									Add to cart
								</button>
							</div>
						</article>
					))}
				</div>

				<Link className="favorites-shop-button" to="/shop">View all juices</Link>
			</section>

				<section className="freshness-section" aria-labelledby="freshness-title">
					<div className="freshness-container">
						<div className="freshness-image-wrap">
							<img
								className="freshness-image"
								src={mixedFruitImage}
								alt="Fresh fruit and colorful juices ready to serve"
							/>
						</div>
						<div className="freshness-content">
							<p className="freshness-label">Freshness matters</p>
							<h2 className="freshness-title" id="freshness-title">Good juice starts with good fruit.</h2>
							<p className="freshness-description">
								We keep our approach simple - fresh ingredients, thoughtful combinations, and refreshing flavors made for everyday moments.
							</p>
							<div className="freshness-points">
								<div className="freshness-point">
									<span className="freshness-point-marker" aria-hidden="true" />
									<div>
										<h3 className="freshness-point-title">Fresh ingredients</h3>
										<p className="freshness-point-text">Fresh fruit brings the bright, natural flavor we look for in every glass.</p>
									</div>
								</div>
								<div className="freshness-point">
									<span className="freshness-point-marker" aria-hidden="true" />
									<div>
										<h3 className="freshness-point-title">Great combinations</h3>
										<p className="freshness-point-text">Different fruits come together to create refreshing flavors with balance and character.</p>
									</div>
								</div>
								<div className="freshness-point">
									<span className="freshness-point-marker" aria-hidden="true" />
									<div>
										<h3 className="freshness-point-title">Made with care</h3>
										<p className="freshness-point-text">Each drink is prepared with attention to taste, texture, and the little details.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="categories-section" aria-labelledby="categories-title">
					<div className="categories-container">
						<div className="categories-header">
							<p className="categories-label">Shop by category</p>
							<h2 className="categories-title" id="categories-title">What are you in the mood for?</h2>
							<p className="categories-description">Explore refreshing flavors and find your next favorite.</p>
						</div>

						<div className="categories-grid">
							<article className="category-card">
								<img className="category-image" src={freshBlendImage} alt="Fresh fruit juice in a clear glass" />
								<div className="category-content">
									<h3 className="category-title">Fruit juices</h3>
									<p className="category-text">Fresh, flavorful juices made from fruit.</p>
									<Link className="category-link" to="/shop">Explore</Link>
								</div>
							</article>
							<article className="category-card">
								<img className="category-image" src={orangeImage} alt="Fresh orange juice with oranges" />
								<div className="category-content">
									<h3 className="category-title">Mixed juices</h3>
									<p className="category-text">Refreshing combinations of different fruits.</p>
									<Link className="category-link" to="/shop">Explore</Link>
								</div>
							</article>
							<article className="category-card">
								<img className="category-image" src={juiceBarImage} alt="Tropical fruit juice served at a juice bar" />
								<div className="category-content">
									<h3 className="category-title">Tropical favorites</h3>
									<p className="category-text">Bright and refreshing tropical flavors.</p>
									<Link className="category-link" to="/shop">Explore</Link>
								</div>
							</article>
							<article className="category-card">
								<img className="category-image" src={fruitStandImage} alt="A selection of colorful fruit juices" />
								<div className="category-content">
									<h3 className="category-title">Signature blends</h3>
									<p className="category-text">Special combinations for something different.</p>
									<Link className="category-link" to="/shop">Explore</Link>
								</div>
							</article>
						</div>
					</div>
				</section>

				<section className="story-section" aria-labelledby="story-title">
					<div className="story-container">
						<div className="story-image-wrap">
							<img
								className="story-image"
								src={fruitStandImage}
								alt="A colorful selection of fresh juices and fruit"
							/>
						</div>
						<div className="story-content">
							<p className="story-label">Our story</p>
							<h2 className="story-title" id="story-title">More than just juice.</h2>
							<p className="story-text">
								Juice Corner is all about bringing fresh, refreshing flavors into everyday moments. From simple favorites to creative fruit combinations, we want every sip to feel fresh, enjoyable, and worth coming back for.
							</p>
							<Link className="story-button" to="/about">Discover our story</Link>
						</div>
					</div>
				</section>

				<section className="reviews-section" aria-labelledby="reviews-title">
					<div className="reviews-container">
						<div className="reviews-header">
							<p className="reviews-label">What our customers say</p>
							<h2 className="reviews-title" id="reviews-title">Fresh flavors, happy customers.</h2>
						</div>

						<div className="reviews-grid">
							<article className="review-card">
								<div className="review-stars" aria-label="Five star placeholder rating">★★★★★</div>
								<p className="review-text">&quot;Your customer review will appear here.&quot;</p>
								<p className="review-name">Customer Name</p>
							</article>
							<article className="review-card">
								<div className="review-stars" aria-label="Five star placeholder rating">★★★★★</div>
								<p className="review-text">&quot;Your customer review will appear here.&quot;</p>
								<p className="review-name">Customer Name</p>
							</article>
							<article className="review-card">
								<div className="review-stars" aria-label="Five star placeholder rating">★★★★★</div>
								<p className="review-text">&quot;Your customer review will appear here.&quot;</p>
								<p className="review-name">Customer Name</p>
							</article>
						</div>
					</div>
				</section>

				<FinalCTA />
		</main>
	);
}

export default Home;
