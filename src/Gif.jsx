import green from "../src/assets/gif/green.gif";


function Gif() {
  return (
    <div className="w-full flex justify-center items-center p-15">
      <img 
        src={green} 
        alt="Gif" 
        className="w-full max-w-5xl h-auto object-cover rounded-xl shadow" 
      />
    </div>
  );
}

export default Gif;
