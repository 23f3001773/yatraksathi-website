import React from 'react';

export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION */}
      <div className="hero-section">
        <h1>Travel With Comfort & Trust</h1>
        <p>Kashi Yatra: Book Taxi, Tour Packages & Hotels at Best Prices</p>
        
        <div className="trust-badges">
          <span><i className="fas fa-check"></i> Best Price Guarantee</span>
          <span><i className="fas fa-check"></i> Trusted by 500+ Customers</span>
        </div>

        <div>
          <button className="btn btn-orange">Book Now</button>
          <button className="btn btn-white">Call Now</button>
        </div>
      </div>

      {/* 2. SERVICES SECTION */}
      <div className="services-section">
        <h2 className="section-heading">Our Services</h2>
        
        <div className="services-container">
          <div className="service-box">
            <div className="icon-circle"><i className="fas fa-car"></i></div>
            <h3>Taxi / Cab Service</h3>
            <p>Local, Outstation & Airport Pickup with clean cars.</p>
          </div>
          <div className="service-box">
            <div className="icon-circle"><i className="fas fa-map-marked-alt"></i></div>
            <h3>Tour Packages</h3>
            <p>Custom & Ready-made Holiday Packages for Kashi.</p>
          </div>
          <div className="service-box">
            <div className="icon-circle"><i className="fas fa-hotel"></i></div>
            <h3>Hotel Booking</h3>
            <p>Budget to Luxury Rooms near Ghats & Temple.</p>
          </div>
          <div className="service-box">
            <div className="icon-circle"><i className="fas fa-ticket-alt"></i></div>
            <h3>Travel Assistance</h3>
            <p>Flight, Train Tickets & Darshan Guide.</p>
          </div>
        </div>
      </div>

      {/* 3. POPULAR TOUR PACKAGES */}
      <div className="packages-section">
        <h2 className="section-heading" style={{ textAlign: 'center' }}>Popular Tour Packages</h2>
        
        <div className="packages-grid">
          {/* Card 1 */}
          <div className="package-card">
            <div className="card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600')" }}></div>
            <div className="card-body">
              <div className="card-title">Varanasi Ganga Darshan</div>
              <div className="card-days">2 Days</div>
              <div className="card-price">₹2,500 | <small>per person</small></div>
              <a href="#" className="btn-view">View Details</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="package-card">
            <div className="card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1668583386726-9275649735b3?w=600')" }}></div>
            <div className="card-body">
              <div className="card-title">Ayodhya Ram Mandir Tour</div>
              <div className="card-days">1 Day</div>
              <div className="card-price">₹3,500 | <small>per person</small></div>
              <a href="#" className="btn-view">View Details</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="package-card">
            <div className="card-img" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Vindhyavasini_Devi_Temple.jpg/800px-Vindhyavasini_Devi_Temple.jpg')" }}></div>
            <div className="card-body">
              <div className="card-title">Vindhyachal Dham Yatra</div>
              <div className="card-days">1 Day</div>
              <div className="card-price">₹2,000 | <small>per person</small></div>
              <a href="#" className="btn-view">View Details</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="package-card">
            <div className="card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591265540539-42b04755b5d0?w=600')" }}></div>
            <div className="card-body">
              <div className="card-title">Prayagraj Sangam Tour</div>
              <div className="card-days">1 Day</div>
              <div className="card-price">₹2,800 | <small>per person</small></div>
              <a href="#" className="btn-view">View Details</a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE US & CONTACT FORM */}
      <div className="bottom-section">
        <div className="left-content">
          <h2 className="section-heading" style={{ marginBottom: '30px' }}>Why Choose Us</h2>
          <ul className="feature-list">
            <li><i className="fas fa-star"></i> Experienced Drivers (Local Experts)</li>
            <li><i className="fas fa-wallet"></i> Affordable Pricing & No Hidden Cost</li>
            <li><i className="fas fa-headset"></i> 24/7 Customer Support</li>
            <li><i className="fas fa-shield-alt"></i> Safe & Comfortable Trips</li>
            <li><i className="fas fa-check-circle"></i> Verified Hotels & Trusted Service</li>
          </ul>

          <div className="testimonial-snippet">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer" />
            <div>
              <h4 style={{ color: 'var(--primary-blue)', fontWeight: 700 }}>Ravi Kishan</h4>
              <div style={{ color: '#FFD700' }}>★★★★★</div>
            </div>
          </div>
        </div>

        <div className="right-form">
          <div className="contact-header">
            <i className="fas fa-phone-alt"></i>
            <span>+91 98765 43210</span>
          </div>
          <p className="form-subtitle">Ready to Plan Your Trip to Kashi?</p>
          
          <form>
            <input type="text" placeholder="Name" className="form-input" required />
            <input type="tel" placeholder="Mobile Number" className="form-input" required />
            <input type="date" className="form-input" />
            <button type="submit" className="submit-btn">Send Enquiry</button>
          </form>
        </div>
      </div>
    </main>
  );
}