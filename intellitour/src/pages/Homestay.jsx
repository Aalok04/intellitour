import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Homestay.css";

// ── Data ──────────────────────────────────────────────────────

const properties = [
    {
        id: 1,
        title: "Homestay in Pachmarhi, Madhya Pradesh, India",
        location: "Pachmarhi, Madhya Pradesh, India",
        type: "Entire Homestay",
        rating: 4.8,
        reviews: 124,
        price: 120,
        bio: "A serene retreat nestled in the lush green landscapes of Pachmarhi.",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/54/c4/d1/paddy-homestay.jpg",
    },
    {
        id: 2,
        title: "Homestay in Pachmarhi, Madhya Pradesh, India",
        location: "Pachmarhi, Madhya Pradesh, India",
        type: "Villa",
        rating: 5,
        reviews: 89,
        price: 95,
        bio: "Authentic Balinese villa surrounded by rice paddies and tropical gardens.",
        img: "https://gos3.ibcdn.com/ae7c98ed-2a92-4453-bf44-2c2e6fc8257f.jpeg",
    },
    {
        id: 3,
        title: "Homestay in Rudraprayag",
        location: "Rudraprayag, Uttarakhand, India",
        type: "Home",
        rating: 4.7,
        reviews: 156,
        price: 85,
        bio: "Homestay in Rudraprayag, Uttarakhand, India.",
        img: "https://curlytales.com/wp-content/uploads/2022/06/Untitled-design-2022-06-02T151529.731.jpg",
    },
    {
        id: 4,
        title: "Suryagrah",
        location: "Jaisalmer, Rajasthan, India",
        type: "Royal Suite",
        rating: 4.9,
        reviews: 203,
        price: 210,
        bio: "Suryagrah, Jaisalmer, Rajasthan, India.",
        img: "https://fortrajwada.com/images/jaisalmer-suite.png",
    },
    {
        id: 5,
        title: "Desert Riad Retreat",
        location: "Marrakech, Morocco",
        type: "Entire Home",
        rating: 4.8,
        reviews: 77,
        price: 75,
        bio: "Traditional riad with a mosaic courtyard and rooftop terrace in the medina.",
        img: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=700&q=80",
    },
    {
        id: 4,
        title: "Santorini Cave Suite",
        location: "Oia, Santorini",
        type: "Suite",
        rating: 4.9,
        reviews: 203,
        price: 210,
        bio: "Iconic cave suite carved into the cliffside with breathtaking caldera views.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80",
    },
    {
        id: 4,
        title: "Santorini Cave Suite",
        location: "Oia, Santorini",
        type: "Suite",
        rating: 4.9,
        reviews: 203,
        price: 210,
        bio: "Iconic cave suite carved into the cliffside with breathtaking caldera views.",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&q=80",
    },
    {
        id: 6,
        title: "Alpine Chalet Escape",
        location: "Interlaken, Switzerland",
        type: "Chalet",
        rating: 4.9,
        reviews: 118,
        price: 185,
        bio: "Cosy wooden chalet nestled in the Alps with panoramic mountain views.",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    },
];

// ── Icons ─────────────────────────────────────────────────────

function SearchIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

function HeartIcon({ active }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill={active ? "#F03E3E" : "none"} stroke={active ? "#F03E3E" : "#6b7280"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    );
}

// ── PropertyCard ──────────────────────────────────────────────

function PropertyCard({ property }) {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="hc">
            {/* Image */}
            <div className="hc__image-wrap">
                <img className="hc__image" src={property.img} alt={property.title} />

                {/* Type badge — top left */}
                <div className="hc__type-badge">{property.type}</div>

                {/* Heart — top right */}
                <button
                    className={`hc__heart${liked ? " hc__heart--active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); setLiked((p) => !p); }}
                    aria-label="Save property"
                >
                    <HeartIcon active={liked} />
                </button>
            </div>

            {/* Body */}
            <div className="hc__body">
                <h3 className="hc__title">{property.title}</h3>

                <div className="hc__location">
                    <PinIcon />
                    {property.location}
                </div>

                <div className="hc__rating">
                    <StarIcon />
                    <span className="hc__rating-score">{property.rating}</span>
                    <span className="hc__rating-dot">·</span>
                    <span className="hc__rating-reviews">{property.reviews} reviews</span>
                </div>

                <p className="hc__bio">{property.bio}</p>

                <div className="hc__footer">
                    <div className="hc__price">
                        <span className="hc__price-amount">${property.price}</span>
                        <span className="hc__price-label">/night</span>
                    </div>
                    <button className="hc__book-btn" onClick={() => navigate('/hotelbooking')}>Book Now</button>
                </div>
            </div>
        </div>
    );
}

// ── HomestayPage ──────────────────────────────────────────────

export default function HomestayPage() {
    const [search, setSearch] = useState("");

    const filtered = properties.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="hp">
            {/* Search */}
            <div className="hp__search-panel">
                <div className="hp__search-wrap">
                    <span className="hp__search-icon"><SearchIcon /></span>
                    <input
                        className="hp__search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by location or property type..."
                    />
                </div>
            </div>

            {/* Count */}
            <p className="hp__count">
                <strong>{filtered.length}</strong> propert{filtered.length !== 1 ? "ies" : "y"} available
            </p>

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="hp__empty">
                    <div>🏠</div>
                    <p>No properties found. Try a different search.</p>
                </div>
            ) : (
                <div className="hp__grid">
                    {filtered.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            )}
        </div>
    );
}