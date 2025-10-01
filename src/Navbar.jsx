import { Link } from "react-scroll";
import Logo from "./assets/gif/Logo.png";

function Navbar() {
  return (
 <div className="flex justify-center">
  <div className="bg-white flex justify-between items-center h-12 px-4 sm:px-10 rounded-2xl shadow fixed top-4 z-50 w-[95%] sm:w-auto">
    <div>
      <img src={Logo} alt="Logo" className="h-6 sm:h-8" />
    </div>

    <div className="hidden sm:flex gap-6  sm:gap-9 text-base sm:text-lg text-green-800">
      <a href="">🔊</a>
      <a href="">تواصل معنا</a>
      <a href="">نبذة هادئة</a>
      <Link to="CARD" smooth>الأقسـام</Link>
      <a href="">الرئيسية</a>
    </div>
  </div>
</div>



  );
}

export default Navbar;
