'use client'
import { clientEndPoints } from "@/constant/ClientUrl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBox from "./SearchBox";
let navItem = [
  { label: 'Home', href: clientEndPoints.home },
  { label: 'Admit Card', href: clientEndPoints.admitCard + '?page=1' },
  { label: 'Result', href: clientEndPoints.result },
  { label: 'Syllabus', href: clientEndPoints.syllabus },
  { label: 'Contact Us', href: clientEndPoints.contact },
  { label: 'About Us', href: clientEndPoints.about }
]
const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="w-full py-3 bg-secondaryBgColor flex justify-center items-center shadow-md flex-col">
      <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 xl:gap-8 font-semibold text-primaryTxtColor text-sm md:text-base xl:text-lg">
        {navItem.map((item, index) => (
          <Link href={item.href}
            key={index}
            className={`${pathName === item.href ? 'bg-white text-black shadow-lg' : ''
              } rounded-full hover:bg-white hover:text-black transition-all duration-300 py-2 px-4 cursor-pointer "hover:no-underline"`}
          >
            
              {item.label}
            </Link>
        ))}
      </ul>
     
        <SearchBox/>
    </nav>

  )
}
export default NavBar;