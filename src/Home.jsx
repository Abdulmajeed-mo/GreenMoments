import green from './assets/imagegif/green.gif';
import './index.css'


function Home() {

    return (
        <div className='items-center justify-center bg-[#c8dba8]'>
            <img src={green} alt="" className="mx-auto mb-3 w-400 h-300px p-4" />
            {/*             
             هنا اذ بضيف القوس الكيرلي ما احطه بين نقطتين زي كذا لانه ماراح يظهر "" */}

            <div className='items-center justify-center flex text-3xl text-amber-50] '>مرحبا بكم في الواجهه الرئيسيه</div>
            <div className="min-h-[300px] flex flex-wrap gap-4 p-4 justify-center text-2xl text-amber-50 shadow-black items-center  rounded-">
                <div className="basis-1/3 bg-[#73865c] p-8 text-center hover:bg-[#d1e7b9] hover:text-[#414b34] rounded-lg  transition-colors duration-500 ease-in-out">   الغابة </div>
                <div className="basis-1/3 bg-[#73865c] p-8 text-center hover:bg-[#d1e7b9] hover:text-[#414b34] rounded-lg  transition-colors duration-500 ease-in-out">  لحظات الطبيعة</div>
                <div className="basis-1/3 bg-[#73865c]  p-8 text-center hover:bg-[#d1e7b9] hover:text-[#414b34] rounded-lg transition-colors duration-500 ease-in-out "> أنواع النباتات </div>
                <div className="basis-1/3 bg-[#73865c]  p-8 text-center hover:bg-[#d1e7b9] hover:text-[#414b34] rounded-lg transition-colors duration-500 ease-in-out "> استكشاف </div>
                <div className="basis-1/3 bg-[#73865c]  p-8 text-center hover:bg-[#d1e7b9] hover:text-[#414b34] rounded-lg transition-colors duration-500 ease-in-out "> رحلة </div>
                <div className="basis-1/3 bg-[#73865c]  p-8 text-center hover:bg-[#d1e7b9] hover:text-[#414b34] rounded-lg transition-colors duration-500 ease-in-out "> طيور </div>

            </div>



 

        </div>
    )
}

export default Home   