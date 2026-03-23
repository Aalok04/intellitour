import { useState } from "react";
import "../style/Guide.css";

// ── Data ──────────────────────────────────────────────────────

const guides = [
  {
    id: 1,
    name: "Sophie Laurent",
    location: "Paris, France",
    rating: 4.9,
    reviews: 247,
    bio: "Passionate about Parisian art and culture with 8 years of guiding experience.",
    languages: ["English", "French", "Spanish"],
    specialties: ["Art & Culture", "Food Tours", "Photography"],
    price: 80,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    rating: 4.8,
    reviews: 312,
    bio: "Tech-savvy guide who loves showing both modern and traditional Tokyo.",
    languages: ["English", "Japanese", "Mandarin"],
    specialties: ["Urban Exploration", "Food", "Technology"],
    price: 75,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  },
  {
    id: 4,
    name: "Carlos Mendez",
    location: "Barcelona, Spain",
    rating: 4.7,
    reviews: 198,
    bio: "Architecture enthusiast and food lover guiding Barcelona's best kept secrets.",
    languages: ["English", "Spanish", "Catalan"],
    specialties: ["Architecture", "Food Tours", "History"],
    price: 65,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    id: 5,
    name: "Amara Diallo",
    location: "Marrakech, Morocco",
    rating: 4.9,
    reviews: 154,
    bio: "Born and raised in Marrakech, expert in medina routes and Moroccan cuisine.",
    languages: ["English", "French", "Arabic"],
    specialties: ["Local Culture", "Food Tours", "Photography"],
    price: 40,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
  },
  {
    id: 6,
    name: "Liam O'Brien",
    location: "Dublin, Ireland",
    rating: 4.8,
    reviews: 276,
    bio: "Storyteller and historian bringing Irish folklore and landscapes to life.",
    languages: ["English", "Irish"],
    specialties: ["History", "Hiking", "Local Culture"],
    price: 70,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  },
  {
    id: 2,
    name: "Ketut Bali",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 189,
    bio: "Local Balinese guide specializing in hidden beaches and spiritual sites.",
    languages: ["English", "Indonesian"],
    specialties: ["Adventure", "Wellness", "Local Culture"],
    price: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b5bdb" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 4.5H18V8L20.5 10.5L18 13V16.5H14.5L12 19L9.5 16.5H6V13L3.5 10.5L6 8V4.5H9.5L12 2Z" />
      <polyline points="8 12 11 15 16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" />
      <path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// ── GuideCard ─────────────────────────────────────────────────

function GuideCard({ guide }) {
  return (
    <div className="gc">
      {/* Header: avatar + name/location + rating */}
      <div className="gc__header">
        <div className="gc__avatar-wrap">
          <img className="gc__avatar" src={guide.avatar} alt={guide.name} />
          <span className="gc__verified"><VerifiedIcon /></span>
        </div>

        <div className="gc__info">
          <div className="gc__name">{guide.name}</div>
          <div className="gc__location">
            <PinIcon />
            {guide.location}
          </div>
          <div className="gc__rating">
            <StarIcon />
            <span className="gc__rating-score">{guide.rating}</span>
            <span className="gc__rating-dot">·</span>
            <span className="gc__rating-reviews">{guide.reviews} reviews</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="gc__bio">{guide.bio}</p>

      {/* Languages */}
      <div className="gc__section-label">
        <LanguageIcon /> Languages
      </div>
      <div className="gc__tags gc__tags--lang">
        {guide.languages.map((lang) => (
          <span key={lang} className="gc__tag gc__tag--lang">{lang}</span>
        ))}
      </div>

      {/* Specialties */}
      <div className="gc__section-label gc__section-label--mt">Specialties</div>
      <div className="gc__tags">
        {guide.specialties.map((spec) => (
          <span key={spec} className="gc__tag gc__tag--spec">{spec}</span>
        ))}
      </div>

      {/* Price */}
      <div className="gc__price">${guide.price}/hour</div>

      {/* Actions */}
      <div className="gc__actions">
        <button className="gc__book-btn">Book Now</button>
        <button className="gc__chat-btn" aria-label="Chat">
          <ChatIcon />
        </button>
      </div>
    </div>
  );
}

// ── GuidePage ─────────────────────────────────────────────────

export default function GuidePage() {
  const [search, setSearch] = useState("");

  const filtered = guides.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.location.toLowerCase().includes(search.toLowerCase()) ||
    g.specialties.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="gp">
      {/* Search */}
      <div className="gp__search-panel">
        <div className="gp__search-wrap">
          <span className="gp__search-icon"><SearchIcon /></span>
          <input
            className="gp__search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, location, or specialty..."
          />
        </div>
      </div>

      {/* Count */}
      <p className="gp__count">
        <strong>{filtered.length}</strong> guide{filtered.length !== 1 ? "s" : ""} available
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="gp__empty">
          <div>🧭</div>
          <p>No guides found. Try a different search.</p>
        </div>
      ) : (
        <div className="gp__grid">
          {filtered.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      )}
    </div>
  );
}