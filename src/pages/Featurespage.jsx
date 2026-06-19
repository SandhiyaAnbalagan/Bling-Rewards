import "./Featurespage.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

function Featurespage() {
  return (
    <div>
    <Navbar />
    <div className="features-page">
 </div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <span className="tag">LOYALTY PLATFORM</span>

          <h1>
            Powerful Features For <br />
            <span>Modern Rewards</span>
          </h1>

          <p>
            Build loyalty programs, increase retention, and grow your business
            with AI-powered automation tools.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Features →
            </button>

            <button className="secondary-btn">
              Book Demo →
            </button>
          </div>
        </div>

        <div className="hero-right">
  <img
  src="/dashboard.png"
  alt="Dashboard"
  className="dashboard-image"
/>
        </div>
      </section>

    <section className="features-section">

  <div className="section-heading">
    <span className="feature-badge">
      ✦ FEATURES ✦
    </span>

    <h2>
      Everything You Need
      <span> To Grow</span>
    </h2>

    <p>
      Powerful tools to build loyalty, engage customers and
      grow your business faster.
    </p>
  </div>

  <div className="featurespage-grid">

    <div className="featurepage-card">
      <center><div className="featurepage-icon">🤖</div></center>

      <h3><center>AI Reward Engine</center></h3>

      <p>
        Smart recommendations tailored to user behaviour and preferences.
      </p>

      <center><a href="/">Learn More →</a></center>

    </div>


    <div className="featurepage-card">
      <center><div className="featurepage-icon">🔳</div></center>

      <center><h3>QR Code Loyalty</h3></center>

      <p>
        Scan, collect and redeem points instantly.
      </p>

      <center><a href="/">Learn More →</a></center>

    </div>


    <div className="featurepage-card">
      <center><div className="featurepage-icon">🎁</div></center>

      <center><h3>Cashback & Spin</h3></center>

      <p>
        Gamified rewards with exciting prizes.
      </p>

     <center> <a href="/">Learn More →</a></center>

    </div>


    <div className="featurepage-card">
      <center><div className="featurepage-icon">💬</div></center>

      <center><h3>Omnichannel Engagement</h3></center>

      <p>
        Reach customers across multiple channels.
      </p>

      <center><a href="/">Learn More →</a></center>
    </div>


    <div className="featurepage-card">
      <center><div className="featurepage-icon">🏪</div></center>

      <center><h3>Dealer Management</h3></center>

      <p>
        Track performance and automate incentives.
      </p>

     <center> <a href="/">Learn More →</a></center>
    </div>


    <div className="featurepage-card">
     <center> <div className="featurepage-icon">📈</div></center>

      <center><h3>Real-time Analytics</h3></center>

      <p>
        Get custom reports and predictive analytics.
      </p>

      <center><a href="/">Learn More →</a></center>
    </div>
  </div>
</section>
      {/* How It Works */}
      <section className="workflow-section">
  <h2 className="workflow-title">How It Works</h2>

  <div className="workflow-container">

    <div className="workflow-card">
      <div className="step-number">01</div>
      <span className="material-symbols-outlined workflow-icon">
        qr_code_scanner
      </span>
      <h3>Scan QR</h3>
      <p>Customers scan the unique QR code on the product.</p>
    </div>

    <div className="workflow-arrow">→</div>

    <div className="workflow-card">
      <div className="step-number">02</div>
      <span className="material-symbols-outlined workflow-icon">
        verified
      </span>
      <h3>Verify</h3>
      <p>Instantly verify product authenticity.</p>
    </div>

    <div className="workflow-arrow">→</div>

    <div className="workflow-card">
      <div className="step-number">03</div>
      <span className="material-symbols-outlined workflow-icon">
        card_giftcard
      </span>
      <h3>Earn Rewards</h3>
      <p>Get cashback, points and surprise gifts.</p>
    </div>

    <div className="workflow-arrow">→</div>

    <div className="workflow-card">
      <div className="step-number">04</div>
      <span className="material-symbols-outlined workflow-icon">
        trending_up
      </span>
      <h3>Grow Loyalty</h3>
      <p>Increase engagement and repeat purchases.</p>
    </div>

  </div>
</section>

{/* STATS */}

<section class="stats-section">

<h1 class="stats-title">
  <span>Our Growth Story </span>
</h1>


<div class="stats-container">

<div class="stats-card-modern">
<i class="stat-icon">🏢</i>
<h2>500+</h2>
<p>Trusted Brands</p>
</div>

<div class="stats-card-modern">
<i class="stat-icon">👥</i>
<h2>2M+</h2>
<p>Active Users</p>
</div>

<div class="stats-card-modern">
<i class="stat-icon">🏆</i>
<h2>98%</h2>
<p>Retention Rate</p>
</div>

<div class="stats-card-modern">
<i class="stat-icon">🤝</i>
<h2>24/7</h2>
<p>Support</p>
</div>

</div>

</section>

      {/* Testimonials */}
     <section className="testimonial-section">

  <h2 className="gradient-text">
    Loved By <span>Industry Leaders</span>
  </h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <div className="icon"><span>🚀</span></div>
      <p>
        "⭐AI engine increased retention and repeat purchases⭐."
      </p>
      <h4>Saurabh Mishra</h4>
    </div>

    <div className="testimonial-card">
      <div className="icon"><span>📱</span></div>
      <p>
        "⭐QR technology made loyalty rewards easier.⭐"
      </p>
      <h4>Manav Taneja</h4>
    </div>

    <div className="testimonial-card">
      <div className="icon"><span>📊</span></div>
      <p>
        "⭐Analytics helped us execute campaigns better.⭐"
      </p>
      <h4>Richa Bhandari</h4>
    </div>
<div className="testimonial-card">
  <div className="icon"><span>💡</span></div>
  <p>
    "⭐Reward automation simplified our entire customer journey.⭐"
  </p>
  <h4>Priya Sharma</h4>
</div>
  </div>

</section>
 <Footer />
    </div>
    
  );
}

export default Featurespage;