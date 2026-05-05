import { useState } from "react";
import "../style/explore.css";

// ── Data ─────────────────────────────────────────────────────

export const destinations = [
  {
    id: 1,
    name: "Paris, France",
    category: "Cultural",
    rating: 4.8,
    duration: "5-7 days",
    priceLevel: "$$$",
    tagColor: "#3B5BDB",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    description: "Explore the romantic streets of Paris",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    category: "Beach",
    rating: 4.9,
    duration: "7-10 days",
    priceLevel: "$$",
    tagColor: "#0CA678",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    description: "Tropical paradise with pristine beaches",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    category: "Urban",
    rating: 4.7,
    duration: "6-8 days",
    priceLevel: "$$$",
    tagColor: "#F03E3E",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    description: "Modern city meets ancient traditions",
  },
  {
    id: 4,
    name: "Patagonia, Argentina",
    category: "Adventure",
    rating: 4.8,
    duration: "8-12 days",
    priceLevel: "$$",
    tagColor: "#E67700",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    description: "Untamed wilderness and glacial landscapes",
  },
  {
    id: 5,
    name: "Santorini, Greece",
    category: "Romantic",
    rating: 4.9,
    duration: "4-6 days",
    priceLevel: "$$$",
    tagColor: "#862E9C",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    description: "White-washed cliffs above the deep blue Aegean",
  },
  {
    id: 6,
    name: "Dubai, UAE",
    category: "Luxury",
    rating: 4.7,
    duration: "4-5 days",
    priceLevel: "$$$$",
    tagColor: "#C9A227",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    description: "Skyline excess, desert gold and endless indulgence",
  },
  {
    id: 7,
    name: "Kyoto, Japan",
    category: "Cultural",
    rating: 4.9,
    duration: "5-6 days",
    priceLevel: "$$$",
    tagColor: "#3B5BDB",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
    description: "Historic temples, gardens, and traditional tea houses",
  },
  {
    id: 8,
    name: "Maldives",
    category: "Beach",
    rating: 4.8,
    duration: "6-8 days",
    priceLevel: "$$$$",
    tagColor: "#0CA678",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    description: "Crystal clear water and luxury overwater bungalows",
  },
  {
    id: 9,
    name: "Swiss Alps",
    category: "Adventure",
    rating: 4.9,
    duration: "7-9 days",
    priceLevel: "$$$",
    tagColor: "#E67700",
    img: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?w=600&q=80",
    description: "Epic skiing and breathtaking mountain peaks",
  },
  {
    id: 10,
    name: "New York City, USA",
    category: "Urban",
    rating: 4.7,
    duration: "5-7 days",
    priceLevel: "$$$",
    tagColor: "#F03E3E",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
    description: "The city that never sleeps and always inspires",
  },
  {
    id: 11,
    name: "Venice, Italy",
    category: "Romantic",
    rating: 4.8,
    duration: "3-5 days",
    priceLevel: "$$$",
    tagColor: "#862E9C",
    img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80",
    description: "Gondola rides through enchanting historic canals",
  },
  {
    id: 12,
    name: "Bora Bora",
    category: "Luxury",
    rating: 4.9,
    duration: "5-7 days",
    priceLevel: "$$$$",
    tagColor: "#C9A227",
    img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
    description: "The ultimate secluded luxury honeymoon escape",
  }
];

const CATEGORIES = ["All", "Beach", "Cultural", "Adventure", "Urban", "Romantic", "Luxury"];

// ── Icons ─────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="11" y1="18" x2="13" y2="18" />
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

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9aa3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ── DestinationCard ───────────────────────────────────────────

export function DestinationCard({ dest }) {
  return (
    <div className="ep-card">
      {/* Image */}
      <div className="ep-card__image-wrap">
        <img className="ep-card__image" src={dest.img} alt={dest.name} />
        

        {/* Rating badge */}
        <div className="ep-card__rating">
          <StarIcon />
          <span>{dest.rating}</span>
        </div>

        {/* Category tag */}
        <div className="ep-card__tag" style={{ background: dest.tagColor }}>
          {dest.category}
        </div>
      </div>

      {/* Body */}
      <div className="ep-card__body">
        <div className="ep-card__title-row">
          <span className="ep-card__name">{dest.name}</span>
          <PinIcon />
        </div>

        <p className="ep-card__description">{dest.description}</p>

        <div className="ep-card__footer">
          <span className="ep-card__meta">
            <ClockIcon />
            {dest.duration}
          </span>
          <span className="ep-card__meta">
            <DollarIcon />
            {dest.priceLevel}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── ExplorePage ───────────────────────────────────────────────

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = destinations.filter((d) => {
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="ep">
      {/* ── Search + Filters ── */}
      <div className="ep__filters-panel">
        {/* Search row */}
        <div className="ep__search-row">
          <div className="ep__search-wrap">
            <span className="ep__search-icon"><SearchIcon /></span>
            <input
              className="ep__search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations..."
            />
          </div>
          <button className="ep__filter-btn">
            <FilterIcon /> More Filters
          </button>
        </div>

        {/* Category pills */}
        <div className="ep__pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ep__pill${activeCategory === cat ? " ep__pill--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Results ── */}
      <div className="ep__results">
        <p className="ep__results-count">
          Showing <strong>{filtered.length}</strong> destination{filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="ep__empty">
            <div className="ep__empty-emoji">🌍</div>
            <p>No destinations found. Try a different search.</p>
          </div>
        ) : (
          <div className="ep__grid">
            {filtered.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}