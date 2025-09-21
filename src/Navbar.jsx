import Logo from "./assets/image/Logo.png";

function Navbar() {
  return (
    <div className="px-50 ">
      <div className="  bg-white justify-evenly flex items-center h-16      rounded-2xl   sticky top-0 z-50 shadow  ">
      <div>
        <img src={Logo} alt="Logo" className="h-10  " />
      </div>

      <div className="flex gap-9 text-xl   text-green-800">
        <a href="">🔊</a>
        <a href="">تواصل معنا</a>
        <a href="">نبذة هادئة</a>
        <a href=""> الأقسـام </a>
        <a href=""> الرئيسية </a>
      </div>
    </div>
    </div>
  );
}


export default Navbar;
