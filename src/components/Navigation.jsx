import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../styles/Navigation.css';
import { useCart } from '../context/CartContext';

const navigationItems = [
	{ label: 'Home', to: '/' },
	{ label: 'Shop', to: '/shop' },
	{ label: 'About', to: '/about' },
	{ label: 'Contact', to: '/contact' },
];

function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	const activeLink = location.pathname;
	const { itemCount } = useCart();

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 24);

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleNavigation = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className={`juice-nav ${isScrolled ? 'juice-nav--scrolled' : ''}`}>
			<div className="juice-nav__inner">
				<Link className="juice-nav__brand" to="/" onClick={handleNavigation}>
					<img src={logo} alt="Juice Corner" />
					<span>JUICE CORNER</span>
				</Link>

				<button
					className="juice-nav__toggle"
					type="button"
					aria-expanded={isMenuOpen}
					aria-controls="juice-navigation"
					aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					onClick={() => setIsMenuOpen((open) => !open)}
				>
					<span />
					<span />
					<span />
				</button>

				<nav
					id="juice-navigation"
					className={`juice-nav__menu ${isMenuOpen ? 'juice-nav__menu--open' : ''}`}
					aria-label="Main navigation"
				>
					{navigationItems.map((item) => (
						<Link
							className={activeLink === item.to ? 'juice-nav__link juice-nav__link--active' : 'juice-nav__link'}
							to={item.to}
							key={item.to}
							onClick={handleNavigation}
						>
							{item.label}
						</Link>
					))}
					<Link
						className={activeLink === '/cart' ? 'juice-nav__link juice-nav__link--active juice-nav__cart' : 'juice-nav__link juice-nav__cart'}
						to="/cart"
						onClick={handleNavigation}
					>
						<span className="juice-nav__cart-icon">Cart</span>
						{itemCount > 0 && <span className="juice-nav__cart-count">{itemCount}</span>}
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Navigation;
