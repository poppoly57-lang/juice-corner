import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Contact() {
	return (
		<>
			<Navigation />
			<main style={{ padding: '80px 20px 120px', textAlign: 'center', color: '#24221F', background: '#FFF8ED' }}>
				<h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>Get in touch</h1>
				<p style={{ maxWidth: '720px', margin: '0 auto', lineHeight: 1.7 }}>
					Reach out for juice orders, questions, and fresh flavor inspiration.
				</p>
			</main>
			<Footer />
		</>
	);
}

export default Contact;
