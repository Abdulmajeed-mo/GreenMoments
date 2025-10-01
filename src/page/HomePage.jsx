import { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';
import Gif from '../Gif.jsx';
import Wisdom from '../Wisdom.jsx';
import Card from '../Card.jsx';
import cardsDataJson from '../assets/data.json'; // <- صححنا المسار

function HomePage () {
  const [cardsData, setCardsData] = useState([]);
  console.log(cardsData)

  useEffect(() => {
    setCardsData(cardsDataJson);
  }, []);
  return (
<div className='min-h-screen bg-gradient-to-t from-[#354725] to-[#e8f9da] p-4 sm:p-8'>
  <Navbar />

  <Gif /> 

  <Wisdom />

  <h2 className="text-3xl font-bold text-center mb-8 text-emerald-100">
    استكشف أقسام الهدوء
  </h2>
  
  <div className="flex flex-wrap justify-center gap-6">
    {cardsData.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        description={card.description}
        image={card.image}
        style={card.style}
      />
    ))}
  </div>
</div>


  );
}

export default HomePage;
