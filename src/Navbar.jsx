
import './index.css'

function Navbar() {

  return (
//  Navbar

    <div className="flex direction-column justify-between items-center h-16 px-14 bg-gray-100 ">
      <div className=" text-5xl text-orange-700"> ✦ </div>

      <div className="flex gap-9 text-xl text-green-800">
        <a href=""> تواصل معنا</a>
        <a href=""> عنا </a>
        <a href=""> خدماتنا </a>
        <a href=""> الرئيسية </a>
      </div>

      <div className='flex justify-center bg-[#cedcb6] h-10 w-25' >
        <button className=" hover"> سجل الحين </button>
     </div>
    </div>


    



  )
}

export default Navbar   