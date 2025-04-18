import { Instrument_Serif, Geologica } from "next/font/google";
import Image from "next/image";
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const geologica = Geologica({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export default function ConfirmEmail() {
  return ( 
     <>
      <div className="size-full h-screen items-center justify-center bg-black md:p-[24px] p-[48px]">
        <div className="flex flex-col items-center justify-between h-full md:py-5 ">
     
               <div className="flex flex-col items-start  justify-between gap-[48px]" >
                 <div className="mx-1 px-[20px]">
                   <Image
                     src="/password.svg"
                     alt='pay'
                     width={224}
                     height={224}
                   />
                 </div>
     
                 <div className="flex flex-col gap-[24px] items-center justify-center">
                   <h2 className={`${instrumentSerif.className} text-white font-normal text-[36px] leading-[36px] tracking-[0%] text-center`}>Confirm email</h2>
     
                   <div className="flex flex-col gap-3 items-center justify-center ">
                     <div className="flex flex-row p-2 gap-1 w-[280px] border border-1 border-solid border-white rounded-2xl">
                       <Image
                         src="/Mail.svg" alt="input mail"
                         width={20} height={20}
                       />
                       <input type="text"
                    placeholder="4-digit code"
                         className="ml-2 py-1 flex-1 bg-black placeholder:text-[#fff] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[16px] placeholder:tracking-[0%] placeholder:opacity-50  " />
                     </div>
                     <button className="text-white bg-[#0077FF] w-[280px] px-[48px] py-[12px] rounded-2xl">
                        <h1 className={`${geologica.className} font-normal text-[16px] leading-[19.2px] tracking-[0%] text-center`}>continue</h1> </button>
                   </div>
                   
                 </div>
               </div>
     

               <h1 className={`text-white ${geologica.className} font-light text-[16px] leading-[16px] tracking-[0%] text-center`}>
                 or import existing one
               </h1>
               
     
     
             </div>
           </div>
         </>
    
  );
}
