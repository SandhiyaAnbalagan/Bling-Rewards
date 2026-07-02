import React from "react";
import "./Featurespage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Featurespage() {
  return (
    <>
      <Navbar />

      <div className="features-page-wrapper">
        <div className="features-page">
          
          {/* HERO SECTION */}
          <section className="hero">
            <div className="hero-left">
              <p className="breadcrumb" style={{color: '#10b981', marginBottom: '15px', fontWeight: '600'}}>Home / Features</p>
              <h1>
                Powerful Features For<br />
                <span>Modern Rewards</span>
              </h1>
              <p>
                Build loyalty programs, increase retention, and grow your business
                with AI-powered automation tools.
              </p>
              <div className="hero-buttons">
                <a href="#explore" className="primary-btn">Explore Features </a>
              </div>
            </div>
            <div className="hero-right">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                alt="Dashboard Mockup"
                className="dashboard-image"
              />
            </div>
          </section>

          {/* 1. EVERYTHING YOU NEED TO GROW - ASYMMETRIC MESH GRID */}
          <section className="f-growth-grid-section" id="explore">
            <div className="section-heading">
              <h2>Everything You Need <span>To Grow</span></h2>
              <p>Maximize retention with premium automated features crafted for business expansion.</p>
            </div>

            <div className="asymmetric-mesh-stream">
              <div className="mesh-panel panel-accent-top">
                <div className="mesh-badge-icon">🤖</div>
                <div className="mesh-content-core">
                  <h3>AI Reward Engine</h3>
                  <p>Smart recommendations built to target exact user actions seamlessly without latency boundaries.</p>
                  
                </div>
              </div>

              <div className="mesh-panel panel-shifted-down">
                <div className="mesh-badge-icon">📱</div>
                <div className="mesh-content-core">
                  <h3>QR Code Loyalty</h3>
                  <p>Scan, validate, and reward offline users in real-time instantly across distribution hubs.</p>
                  
                </div>
              </div>

              <div className="mesh-panel panel-accent-mid">
                <div className="mesh-badge-icon">🎁</div>
                <div className="mesh-content-core">
                  <h3>Cashback & Spin</h3>
                  <p>Gamified engagement modules to boost active product retention drops and weekly engagement packs.</p>
                 
                </div>
              </div>

              <div className="mesh-panel">
                <div className="mesh-badge-icon">🔄</div>
                <div className="mesh-content-core">
                  <h3>Omnichannel Sync</h3>
                  <p>Sync web, mobile, and physical retail outlets inside one clear absolute ecosystem seamlessly.</p>
                  
                </div>
              </div>

              <div className="mesh-panel panel-shifted-up">
                <div className="mesh-badge-icon">🤝</div>
                <div className="mesh-content-core">
                  <h3>Dealer Management</h3>
                  <p>Incentivize distribution layers with automated milestone payouts and live ranking matrices.</p>
                  
                </div>
              </div>

              <div className="mesh-panel panel-accent-low">
                <div className="mesh-badge-icon">📊</div>
                <div className="mesh-content-core">
                  <h3>Real-time Analytics</h3>
                  <p>Trace conversion matrices and program health dynamically over timelines instantly.</p>
                  
                </div>
              </div>
            </div>
          </section>

          {/* 2. HOW IT WORKS - HORIZONTAL STREAMLINED TIMELINE (UPDATED) */}
          <section className="fworkflow-section">
            <div className="section-heading">
              <h2>How It <span>Works</span></h2>
              <p>Simple seamless onboarding structure generated to activate user lifecycles.</p>
            </div>

            <div className="horizontal-journey-wrapper">
              {/* Central Horizontal Timeline Track Vector Line */}
              <div className="horizontal-pipeline-line"></div>

              <div className="horizontal-journey-track">
                {/* Step 1 */}
                <div className="journey-node-column">
                  <div className="node-marker-hub">
                    <span className="node-number-badge">01</span>
                    <span className="node-emoji-sticker">🔍</span>
                  </div>
                  <div className="journey-editorial-block">
                    <h3>Scan QR Target</h3>
                    <p>Customers effortlessly scan unique secure QR targets tagged onto individual packaging panels or item boxes.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="journey-node-column">
                  <div className="node-marker-hub">
                    <span className="node-number-badge">02</span>
                    <span className="node-emoji-sticker">🛡️</span>
                  </div>
                  <div className="journey-editorial-block">
                    <h3>Secure Validation</h3>
                    <p>Cloud loyalty engines instantly audit and validate product serial keys to prevent unauthorized duplicate scanning issues.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="journey-node-column">
                  <div className="node-marker-hub">
                    <span className="node-number-badge">03</span>
                    <span className="node-emoji-sticker">💰</span>
                  </div>
                  <div className="journey-editorial-block">
                    <h3>Instant Crediting</h3>
                    <p>Wallets immediately reflect real points, dynamic scratch vouchers, or custom cashbacks straight to native destination accounts.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="journey-node-column">
                  <div className="node-marker-hub">
                    <span className="node-number-badge">04</span>
                    <span className="node-emoji-sticker">📈</span>
                  </div>
                  <div className="journey-editorial-block">
                    <h3>Tier Advancement</h3>
                    <p>Trigger milestone metrics automatically based on engagement value, maintaining peak recurring customer lifecycles permanently.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. OUR GROWTH STORY - RADIAL HALO SHIELDS */}
          <section className="fstats-section">
            <div className="section-heading">
              <h2>Our Growth <span>Story</span></h2>
              <p>Backing standard market entities worldwide through active retention engineering.</p>
            </div>

            <div className="radial-shields-deck">
              <div className="radial-shield-orb">
                <div className="shield-halo-pulse"></div>
                <div className="shield-inner-data">
                  <span className="shield-icon-marker">🏢</span>
                  <h2>500+</h2>
                  <p>Trusted Enterprise Brands</p>
                </div>
              </div>

              <div className="radial-shield-orb orb-offset-emerald">
                <div className="shield-halo-pulse"></div>
                <div className="shield-inner-data">
                  <span className="shield-icon-marker">👥</span>
                  <h2>2M+</h2>
                  <p>Active Verified Users</p>
                </div>
              </div>

              <div className="radial-shield-orb">
                <div className="shield-halo-pulse"></div>
                <div className="shield-inner-data">
                  <span className="shield-icon-marker">🎯</span>
                  <h2>98%</h2>
                  <p>Client Retention Rate</p>
                </div>
              </div>

              <div className="radial-shield-orb orb-offset-emerald">
                <div className="shield-halo-pulse"></div>
                <div className="shield-inner-data">
                  <span className="shield-icon-marker">⚡</span>
                  <h2>24/7</h2>
                  <p>Automated Engine Payouts</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. LOVED BY INDUSTRY LEADERS - EDITORIAL FLOATING SPEECH LAYERS */}
          <section className="ftestimonial-section">
            <div className="section-heading">
              <h2>Loved By Industry <span>Leaders</span></h2>
              <p>See how enterprise product managers scale core repeat retention margins.</p>
            </div>

            <div className="editorial-speech-deck">
              <div className="speech-bubble-row tier-left-speech">
                <div className="speech-avatar-token">MT</div>
                <div className="speech-bubble-body">
                  <p>"Bling rewards completely transformed how our offline retail distributors register warranty sheets!"</p>
                  <div className="speech-user-signature">
                    <strong>Manav Taneja</strong> — <span>VP, Retail Growth</span>
                  </div>
                </div>
              </div>

              <div className="speech-bubble-row tier-right-speech">
                <div className="speech-avatar-token status-accent-color">RB</div>
                <div className="speech-bubble-body">
                  <p>"The automated scratch card payout system pushed customer retention rates up by 35% in 60 days flat."</p>
                  <div className="speech-user-signature">
                    <strong>Richa Bhandari</strong> — <span>Product Lead</span>
                  </div>
                </div>
              </div>

              <div className="speech-bubble-row tier-left-speech">
                <div className="speech-avatar-token">PS</div>
                <div className="speech-bubble-body">
                  <p>"Excellent data transparency. Managing multi-tiered seasonal reward matrices for contractor channels became incredibly intuitive."</p>
                  <div className="speech-user-signature">
                    <strong>Priya Sharma</strong> — <span>Operations Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Featurespage;