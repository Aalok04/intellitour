import "../App.css";

export default function GemCard({ image, name, description }) {
  return (
    <div className="gem-card">
      <img src={image} alt={name} className="gem-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
