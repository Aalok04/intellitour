import { Users, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LocalExpertBanner() {
    const navigate = useNavigate();
    return (
        <div
            style={{
                background: "#f3f0fa",
                borderRadius: "16px",
                padding: "40px 48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px",
                fontFamily: "'Segoe UI', sans-serif",
                overflow: "hidden",
            }}
        >
            {/* Left Content */}
            <div style={{ flex: 1, maxWidth: "480px" }}>
                <p
                    style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#6b21a8",
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                    }}
                >
                    Need a Local Expert?
                </p>

                <p
                    style={{
                        fontSize: "17px",
                        color: "#1a1a2e",
                        lineHeight: 1.6,
                        marginBottom: "28px",
                    }}
                >
                    Connect with experienced local guides who know the hidden gems and can
                    create unforgettable experiences tailored just for you.
                </p>

                {/* Feature List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
                    {[
                        { icon: <Users size={16} />, label: "Verified professional guides" },
                        { icon: <Calendar size={16} />, label: "Flexible scheduling" },
                        { icon: <MapPin size={16} />, label: "Local expertise & insights" },
                    ].map(({ icon, label }) => (
                        <div
                            key={label}
                            style={{ display: "flex", alignItems: "center", gap: "12px" }}
                        >
                            <div
                                style={{
                                    width: "34px",
                                    height: "34px",
                                    borderRadius: "50%",
                                    background: "#ede9fe",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#7c3aed",
                                    flexShrink: 0,
                                }}
                            >
                                {icon}
                            </div>
                            <span style={{ fontSize: "15px", color: "#374151" }}>{label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    style={{
                        background: "#7c3aed",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        padding: "14px 28px",
                        fontSize: "15px",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#6d28d9")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#7c3aed")}
                    onClick={() => navigate("/guide")}
                >
                    Find Your Guide <ArrowRight size={16} />
                </button>
            </div>

            {/* Right Image */}
            <div
                style={{
                    flexShrink: 0,
                    width: "380px",
                    height: "300px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                }}
            >
                <img
                    src="https://media.istockphoto.com/id/614334048/photo/young-travel-man-lending-a-helping-hand-in-mountain.jpg?s=612x612&w=0&k=20&c=cUqDkf79H_fKUBJoIcUFIS-PQrSf5zLamUZUxgyk7II="
                    alt="Local guide signs"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>
        </div>
    );
}