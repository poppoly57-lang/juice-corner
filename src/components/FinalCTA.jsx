import { Link } from 'react-router-dom';
import '../styles/FinalCta.css';

function FinalCTA() {
	return (
		<section className="final-cta" aria-labelledby="final-cta-title">
			<div className="final-cta-container">
				<p className="final-cta-label">Ready for something fresh?</p>
				<h2 className="final-cta-title" id="final-cta-title">Your next favorite juice is waiting.</h2>
				<p className="final-cta-text">Explore our flavors, choose your favorite, and enjoy something refreshing.</p>
				<div className="final-cta-actions">
					<Link className="final-cta-button" to="/shop">Shop our juices</Link>
					<Link className="final-cta-link" to="/about">Want to learn more about Juice Corner?</Link>
				</div>
			</div>
		</section>
	);
}

export default FinalCTA;