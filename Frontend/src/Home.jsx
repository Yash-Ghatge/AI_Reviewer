import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToApp = () => {
    navigate('/code-review');
    console.log('Navigate to main app');
  };
  return (
    <>
    <div className="homepage">
      
      <header className="header">
        <nav className="nav">
          <div className="logo">CodeReviewer</div>
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            
            <button className="cta-button" onClick={navigateToApp}>
              Try Now
            </button>
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

 
      <main className="main-box">
       
        <section className="hero">
          <div className="container">
            <h1>AI-Powered Code Review Made Simple</h1>
            <p>
              Get instant feedback on your code quality, security vulnerabilities, 
              and performance optimizations. Improve your code in seconds, not hours.
            </p>
            <div className="hero-buttons">
              <button className="hero-cta" onClick={navigateToApp}>
                Start Reviewing Code
              </button>
              
            </div>
          </div>
        </section>

        
        <section id="features" className="features">
          <div className="container">
            <h2>Why Choose CodeReviewer?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Smart Analysis</h3>
                <p>Advanced AI algorithms detect code smells, bugs, and potential issues across multiple programming languages.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3>Security First</h3>
                <p>Identify security vulnerabilities and get recommendations to protect your applications from common threats.</p>
              </div>
              <div className="feature-card">
                <div>⚡</div>
                <h3>Lightning Fast</h3>
                <p>Get comprehensive code reviews in seconds. No waiting, no setup required - just paste and analyze.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Performance Tips</h3>
                <p>Receive actionable suggestions to optimize your code performance and improve overall efficiency.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Best Practices</h3>
                <p>Learn industry standards and coding conventions to write cleaner, more maintainable code.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌐</div>
                <h3>Language</h3>
                <p>Support for JavaScript and Node JS, and many more JavaScript libraries.</p>
              </div>
            </div>
          </div>
        </section>

        
        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Paste Your Code</h3>
                <p>Simply copy and paste your code into our editor. No files to upload or accounts to create.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>AI Analysis</h3>
                <p>Our advanced AI analyzes your code for quality, security, performance, and best practices.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Get Results</h3>
                <p>Receive detailed feedback with specific suggestions and explanations to improve your code.</p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Improve Your Code?</h2>
            <p>Join thousands of developers who trust CodeReviewer for better code quality.</p>
            <button className="hero-cta" onClick={navigateToApp}>
              Start Your First Review
            </button>
          </div>
        </section>
      </main>

      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CodeReviewer</h3>
              <p>Making code review accessible to everyone.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Yash Ghatge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home
