// import GemCard from "../components/GemCard";
// import "../App.css";
// import img1 from "../assets/sample1.jpg";
// import img2 from "../assets/sample2.jpg";
// import img3 from "../assets/sample3.jpg";

// export default function Explore() {
//   const gems = [
//     { image: img1, name: "Hidden Lake", description: "A peaceful lake surrounded by forest trails." },
//     { image: img2, name: "Local Bazaar", description: "Shop local crafts, spices, and souvenirs." },
//     { image: img3, name: "Sunset Point", description: "Perfect spot for scenic evening views." },
//   ];

//   return (
//     <div className="explore">
//       <h2>Explore Hidden Gems</h2>
//       <div className="gem-grid">
//         {gems.map((gem, i) => (
//           <GemCard key={i} {...gem} />
//         ))}
//       </div>
//     </div>
//   );
// }


import GemCard from "../components/GemCard";
import "../App.css";
import img1 from "../assets/sample1.jpg";
import img2 from "../assets/sample2.jpg";
import img3 from "../assets/sample3.jpg";

export default function Explore() {
  const gems = [
    { image: img1, name: "Hidden Lake", description: "A peaceful lake surrounded by forest trails." },
    { image: img2, name: "Local Bazaar", description: "Shop local crafts, spices, and souvenirs." },
    { image: img3, name: "Sunset Point", description: "Perfect spot for scenic evening views." },
  ];

  return (


    
    <div className="explore">
      <h2>Explore Hidden Gems</h2>
      <div className="gem-grid">
        {gems.map((gem, i) => (
          <GemCard key={i} {...gem} />
        ))}
      </div>
    </div>
  );
}
