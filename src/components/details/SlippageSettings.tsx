import { Geologica } from "next/font/google"
const geologica = Geologica({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

const SlippageSettings = () => {
  return (
      <div className="hidden p-[18px] bg-[#ebebeb] md:flex md:flex-col gap-3 rounded-[12px] md:justify-between">
          <div className="flex flex-col gap-[12px]">
              <h1 className={`${geologica.className}font-normal text-[16px] leading-[1] tracking-[0%] `}>Sell  (take profit)</h1>
              <div className="flex flex-row gap-[6px]">
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>1.5X</h1> </div>
                  <div className="p-1 bg-blue-500 rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>2X</h1> </div>
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>5X</h1> </div>
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>10X</h1> </div>
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>20X</h1> </div>

                  
                  <div className="p-1 bg-white w-[92px] xl:w-[188px]"><h1 className={`${geologica.className} text-[#ebebeb] font-normal text-[12px] leading-[12px] tracking-[0%]`}>CUSTOM</h1>
                  </div>
              </div>
          </div>
          
          <div className="flex flex-col gap-[12px]">
              <h1 className={`${geologica.className}font-normal text-[16px] leading-[1] tracking-[0%] `}>Sell  (take profit)</h1>
              <div className="flex flex-row gap-[6px]">
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>1.5X</h1> </div>
                  <div className="p-1 bg-blue-500 rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>2X</h1> </div>
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>5X</h1> </div>
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>10X</h1> </div>
                  <div className="p-1 bg-black rounded-[6px]"><h1 className={`${geologica.className} text-white font-normal text-[12px] leading-[12px] lg:leading-[1] tracking-[0%]`}>20X</h1> </div>


                  <div className="p-1 bg-white flex-1 w-[92px] 2xl:w-[188px]"><h1 className={`${geologica.className} text-[#ebebeb] font-normal text-[12px] leading-[12px] tracking-[0%]`}>CUSTOM</h1>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SlippageSettings