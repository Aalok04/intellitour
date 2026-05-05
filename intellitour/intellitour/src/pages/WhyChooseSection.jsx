import "../style/WhyChooseSection.css";


const features = [
    {
        id: 1,
        emoji: "🤖",
        bgClass: "card-bg--blue",
        title: "AI-Powered Planning",
        description:
            "Smart algorithms create personalized itineraries based on your preferences and travel style.",
    },
    {
        id: 2,
        emoji: "👥",
        bgClass: "card-bg--purple",
        title: "Expert Local Guides",
        description:
            "Connect with verified professionals who bring destinations to life with insider knowledge.",
    },
    {
        id: 3,
        emoji: "✨",
        bgClass: "card-bg--pink",
        title: "Seamless Experience",
        description:
            "From planning to booking, everything you need for an amazing trip in one place.",
    },
];

export default function WhyChooseSection() {
    return (
        <section className="wcs-section">
            {/* Decorative blobs */}
            <div className="wcs-blob wcs-blob--left" aria-hidden="true" />
            <div className="wcs-blob wcs-blob--right" aria-hidden="true" />

            <div className="wcs-header">
                <p className="wcs-eyebrow">Why Choose Intellitour?</p>
                <h2 className="wcs-headline">
                    Your perfect journey starts here with{" "}
                    <span className="wcs-highlight">AI-powered planning</span> and local
                    expertise
                </h2>
            </div>

            <div className="wcs-grid">
                {features.map((feat, i) => (
                    <div
                        key={feat.id}
                        className="wcs-card"
                        style={{ animationDelay: `${i * 0.12}s` }}
                    >
                        <div className={`wcs-icon-wrap ${feat.bgClass}`}>
                            <span className="wcs-emoji" role="img" aria-label={feat.title}>
                                {feat.emoji}
                            </span>
                        </div>
                        <h3 className="wcs-card-title">{feat.title}</h3>
                        <p className="wcs-card-desc">{feat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}