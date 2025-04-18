"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

const downNavLinks = [
    {
        imgURL: "/HomeSwap.svg",
        route: "/",
        id: 1,
    },
    {
        imgURL: "/SwapSwap.svg",
        route: "/swap",
        id: 2,
    },
    {
        imgURL: "/DiamondSwap.svg",
        route: "/spot",
        id: 3,
    },
    {
        imgURL: "/WatchSwap.svg",
        route: "/",
        id: 4,
    }
];
const DownNav = () => {
    const pathname = usePathname();
    return (
        <nav className="md:hidden  fixed bottom-0 left-0 bg-[#ebebeb] flex justify-between rounded-tl-[60px] rounded-tr-[60px] py-[24px] px-[48px] w-full z-5">
            {
                downNavLinks.map((item) => {
                    const isActive = pathname === item.route || pathname?.startsWith(`${item.route}/`);
                    return (
                        <a href={item.route} key={item.id} >
                            <Image src={item.imgURL} alt='Home' width={24} height={24} />
                        </a>
                    )
                })
            }


        </nav>
    )
}



export default DownNav