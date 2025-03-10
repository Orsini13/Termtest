import DownNav from "@/components/details/DownNav"
import Sidebar from "@/components/details/Sidebar"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <main className="overflow-auto hide-scrollbar relative h-screen p-4 md:px-2 pmd:p-12 pxl:px-18">
      
      <div className="md:flex md:flex-row md:gap-3 lgg:gap-4 pmd:gap-6  pmd:min-w-[906px] pxl:max-w-[1300px] md:px-2 mdd:px-9 pmd:px-0 xl:px-0 pxl:gap-6 mx-auto ">
            <Sidebar />
          {children}
        
      </div>
      <DownNav />
    </main>

//  <main className="overflow-auto hide-scrollbar relative h-screen p-4 md:px-2 pmd:p-12">
      
//       <div className="md:flex md:flex-row md:gap-3  pmd:gap-6 pmd:max-w-[906px] pxl:w-[1250px] xl:gap-[24px] mx-auto ">
//             <Sidebar />
//           {children}
        
//       </div>
//       <DownNav />
//     </main>

  )
}