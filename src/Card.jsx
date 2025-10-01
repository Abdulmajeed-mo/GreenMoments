// src/components/Card.jsx
export default function Card({ title, description, image, style }) {
  let styleClasses = "";

  switch (style) {
    case "style1":
      styleClasses = "bg-gradient-to-t from-green-200 to-green-400";
      break;
    case "style2":
      styleClasses = "bg-gradient-to-r from-blue-200 to-cyan-300";
      break;
    case "style3":
      styleClasses = "bg-gradient-to-br from-yellow-200 to-orange-300";
      break;
    case "style4":
      styleClasses = "bg-gradient-to-l from-purple-200 to-pink-300";
      break;
    default:
      styleClasses = "bg-white";
  }

  return (
 <div
  id="CARD"
  className={`w-full sm:w-80 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group relative ${styleClasses}`}
>
  <div className="w-full h-full overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>

  <div className="absolute inset-0 bg-black/30 flex flex-col items-end justify-end p-2 sm:p-4">
    <h1 className="text-lg sm:text-xl font-bold text-white">{title}</h1>
    <p className="text-white/90 text-xs sm:text-sm mt-1">{description}</p>
  </div>
</div>


  );
}
