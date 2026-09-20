import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function About() {
	return (
		<>
			<Navigation />
			<main style={{ padding: '80px 20px 120px', textAlign: 'center', color: '#24221F', background: '#FFF8ED' }}>
				<h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>About Juice Corner</h1>
				<p style={{ maxWidth: '720px', margin: '0 auto', lineHeight: 1.7 }}>
					Fresh fruit, thoughtful combinations, and simple everyday refreshment.
				</p>
			</main>
			<Footer />
		</>
	);
}

export default About;
