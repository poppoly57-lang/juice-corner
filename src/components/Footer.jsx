import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-grid">
				<div>
					<div className="footer-brand">
						<img src={logo} alt="Juice Corner logo" />
						<span>JUICE CORNER</span>
					</div>
					<p>
						Fresh fruit, real flavor, and a little daily refreshment in every glass.
					</p>
				</div>

				<div>
					<h3>Shop</h3>
					<ul>
						<li><Link to="/shop">Fresh juices</Link></li>
						<li><Link to="/shop">Cold blends</Link></li>
						<li><Link to="/shop">Popular picks</Link></li>
					</ul>
				</div>

				<div>
					<h3>About</h3>
					<ul>
						<li><Link to="/about">Our story</Link></li>
						<li><Link to="/about">Ingredients</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</div>

				<div>
					<h3>Follow us</h3>
					<ul>
						<li><Link to="/contact">Instagram</Link></li>
						<li><Link to="/contact">Facebook</Link></li>
						<li><Link to="/contact">TikTok</Link></li>
					</ul>
				</div>
			</div>

			<div className="container footer-bottom">
				<p>© 2026 Juice Corner. All rights reserved.</p>
				<a
					className="portfolio-credit"
					href="https://polifolio.poppoly57.workers.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					POLYCARP PRINCE OLUPOT
				</a>
			</div>
		</footer>
	);
}

export default Footer;
