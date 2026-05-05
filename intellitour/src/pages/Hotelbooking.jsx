import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/HotelBooking.css";

const AMENITIES = [
  { icon: "📶", label: "WiFi" },
  { icon: "🏠", label: "Kitchen" },
  { icon: "☕", label: "Coffee" },
  { icon: "🌆", label: "City View" },
  { icon: "❄️", label: "Air Conditioning" },
  { icon: "🔥", label: "Heating" },
  { icon: "🫧", label: "Washer" },
  { icon: "💨", label: "Dryer" },
];

const HOUSE_RULES = [
  { icon: "🕒", text: "Check-in: 3:00 PM – 10:00 PM" },
  { icon: "🕙", text: "Checkout: 11:00 AM" },
  { icon: "🚭", text: "No smoking inside the apartment" },
  { icon: "🐾", text: "No pets allowed" },
  { icon: "🎉", text: "No parties or events" },
  { icon: "👤", text: "Maximum 4 guests" },
];

const REVIEWS = [
  {
    initials: "SL",
    name: "Sophie Laurent",
    date: "April 2026",
    text: "Absolutely enchanting stay! The Montmartre views from the balcony each morning were worth every penny. Marie is a wonderful host.",
  },
  {
    initials: "JM",
    name: "James Morley",
    date: "March 2026",
    text: "Stunning apartment with character and charm. The hardwood floors and high ceilings make it feel like a true Parisian home.",
  },
  {
    initials: "AK",
    name: "Aisha Kapoor",
    date: "March 2026",
    text: "Perfect location, beautifully decorated, and spotlessly clean. Would return without hesitation. Highly recommend!",
  },
  {
    initials: "TB",
    name: "Thomas Bernard",
    date: "February 2026",
    text: "Great value for Paris. The balcony coffee experience is unmatched. Communication with the host was seamless throughout.",
  },
];

const GALLERY_IMAGES = [
  "https://media-cdn.tripadvisor.com/media/photo-s/0e/54/c4/d1/paddy-homestay.jpg",
  "https://lh6.googleusercontent.com/proxy/xXyLDH_30CnxOmXMxr-fEPsmQst_u9dgzG97EBmKH_kLl3uvYV3zJ8vfiqtANufV2WID1PXOgCEqF-SxocuWp_gBqJB6gZIkAAudlM4m4Mx3mnYiNZTy37g-zUHAhvkPzF_y4B6dEpnzk1Gvk5knRMZMlm9TLg=w253-h168-k-no",
  "https://lh3.googleusercontent.com/proxy/L2uZQjp1yLdXoJekd_HG4Taug4Nt-boRHvPv6_lIh8R3eI9VfyPj_Be9grWtKwfhzPu_WbACTEu-SSG5DhcJNLS6tISFpVNo3GtEU9ncL2dC3_vH26FQqKSpwxvcp-HoeC6rnR5NL2CqFhGhpDOvxsDi3SXyuw=w253-h168-k-no",
  "https://lh6.googleusercontent.com/proxy/F2BiK5Fk5It_Yi2o34DaYMvkRSEd7SYTVtLj67LNnwmoQiXpsN8XAxvQfhrdzj1D9Z__6DfNQFQNarcc_CBk7gzrHKcOO3dUNOlnofD6AqXbYEDMzsDUN5C-GisDzkJMd4rs3mbRDi4RJHnzhjQMkeV2Jbn_Qw=w253-h189-k-no",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=80",
];

export default function HotelBooking() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const pricePerNight = 120;

  const nights = (() => {
    if (!checkIn || !checkOut) return 0;
    const diff = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  })();

  const subtotal = pricePerNight * (nights || 5);
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;

  return (
    <div>
      {/* NAVBAR */}
      

      {/* BACK NAV */}
      <div className="back-nav">
        <button className="back-link" onClick={() => navigate('/homestay')}>← Back to Homestays</button>
        <div className="back-actions">
          <button className="action-btn">↗ Share</button>
          <button className="action-btn">♡ Save</button>
        </div>
      </div>

      <div className="page">
        {/* HEADER */}
        <div className="listing-header">
          <h1 className="listing-title">Cozy Parisian Apartment</h1>
          <div className="listing-meta">
            <span className="meta-rating">
              <span className="star-icon">★</span>
              <strong>4.8</strong>
              <span style={{ color: "var(--warm-gray)" }}>(124 reviews)</span>
            </span>
            <span className="meta-divider" />
            <span className="meta-location">📍 Montmartre, Paris, France</span>
            <span className="meta-badge">Entire Apartment</span>
          </div>
        </div>

        {/* GALLERY */}
        <div className="gallery">
          <div className="gallery-main">
            <img
              src={GALLERY_IMAGES[0]}
              alt="Living area"
              className="gallery-img"
            />
          </div>
          <div className="gallery-right">
            {GALLERY_IMAGES.slice(1).map((src, i) => (
              <div className="gallery-slot" key={i}>
                <img src={src} alt={`Room ${i + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="content-layout">
          {/* LEFT */}
          <div className="listing-info">
            {/* HOST */}
            <div className="host-card">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                alt="Host"
                className="host-avatar"
              />
              <div className="host-info">
                <h3>Hosted by Aarya </h3>
                <p>Superhost · 3 years hosting</p>
              </div>
              <div className="host-stats">
                <div className="host-stat">
                  <span className="host-stat-value">124</span>
                  <span className="host-stat-label">Reviews</span>
                </div>
                <div className="host-stat">
                  <span className="host-stat-value">4.8</span>
                  <span className="host-stat-label">Rating</span>
                </div>
                <div className="host-stat">
                  <span className="host-stat-value">3yrs</span>
                  <span className="host-stat-label">Hosting</span>
                </div>
              </div>
            </div>

            {/* SPECS */}
            <div className="specs-row">
              <div className="spec-item"><span className="spec-icon">👥</span> Up to 4 guests</div>
              <div className="spec-item"><span className="spec-icon">🛏</span> 2 bedrooms</div>
              <div className="spec-item"><span className="spec-icon">🚿</span> 1 bathroom</div>
              <div className="spec-item"><span className="spec-icon">📐</span> 75 m²</div>
            </div>

            {/* ABOUT */}
            <div className="section">
              <h2 className="section-title">About this place</h2>
              <p className="section-text">
                Experience authentic Parisian living in this beautifully renovated apartment located in the historic
                Montmartre district. The space features original hardwood floors, high ceilings, and large windows that
                flood the rooms with natural light. Wake up to stunning views of the Sacré-Cœur Basilica and enjoy your
                morning coffee on the private balcony overlooking the charming cobblestone streets.
              </p>
            </div>

            {/* AMENITIES */}
            <div className="section">
              <h2 className="section-title">What this place offers</h2>
              <div className="amenities-grid">
                {AMENITIES.map((a) => (
                  <div className="amenity-item" key={a.label}>
                    <div className="amenity-icon">{a.icon}</div>
                    {a.label}
                  </div>
                ))}
              </div>
            </div>

            {/* HOUSE RULES */}
            <div className="section">
              <h2 className="section-title">House Rules</h2>
              <div className="rules-list">
                {HOUSE_RULES.map((r) => (
                  <div className="rule-item" key={r.text}>
                    <span className="rule-icon">{r.icon}</span>
                    {r.text}
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEWS */}
            <div className="section">
              <h2 className="section-title">Guest Reviews</h2>
              <div className="reviews-summary">
                <div className="reviews-score">4.8</div>
                <div className="reviews-detail">
                  <div className="reviews-stars">★★★★★</div>
                  <div className="reviews-count">Based on 124 reviews</div>
                </div>
              </div>
              <div className="review-cards">
                {REVIEWS.map((r) => (
                  <div className="review-card" key={r.name}>
                    <div className="review-card-header">
                      <div className="reviewer-avatar">{r.initials}</div>
                      <div>
                        <div className="reviewer-name">{r.name}</div>
                        <div className="reviewer-date">{r.date}</div>
                      </div>
                    </div>
                    <p className="review-text">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div className="section">
              <h2 className="section-title">Location</h2>
              <p className="section-text">Montmartre, 18th arrondissement, Paris, France</p>
              <div className="map-placeholder">
                <div className="map-bg" />
                <div className="map-pin">📍 Montmartre, Paris</div>
              </div>
            </div>
          </div>

          {/* RIGHT — BOOKING CARD */}
          <div>
            <div className="booking-card">
              <div className="booking-price">
                <span className="price-main">${pricePerNight}</span>
                <span className="price-unit"> / night</span>
                <div className="price-rating">
                  <span style={{ color: "var(--gold)" }}>★</span>
                  4.8 · 124 reviews
                </div>
              </div>

              {/* DATES */}
              <div className="date-grid">
                <div className="date-field">
                  <span className="date-label">Check-in</span>
                  <input
                    type="date"
                    className="date-input"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="date-field">
                  <span className="date-label">Check-out</span>
                  <input
                    type="date"
                    className="date-input"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              {/* GUESTS */}
              <div className="guest-field">
                <div className="guest-label-wrap">
                  <span className="guest-label">Guests</span>
                  <span className="guest-value">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </span>
                </div>
                <div className="guest-controls">
                  <button
                    className="guest-btn"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    disabled={guests <= 1}
                  >
                    −
                  </button>
                  <span className="guest-count">{guests}</span>
                  <button
                    className="guest-btn"
                    onClick={() => setGuests((g) => Math.min(4, g + 1))}
                    disabled={guests >= 4}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="book-btn">Check Availability</button>
              <p className="book-note">You won't be charged yet</p>

              {/* PRICE BREAKDOWN */}
              <div className="price-breakdown">
                <div className="price-row underline">
                  ${pricePerNight} × {nights || 5} nights
                  <span>${subtotal}</span>
                </div>
                <div className="price-row">
                  Service fee
                  <span>${serviceFee}</span>
                </div>
                <div className="price-row total">
                  Total
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}