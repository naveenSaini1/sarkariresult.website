import Link from "next/link";

const Jobs = ({ title, slug ,BgColor,TxtColor}) => {
    //let color="#fdfbe5";
    return (
        <div className={` text-center px-4 py-6 rounded cursor-pointer transform hover:scale-105 duration-300 ease-in-out min-h-40`} style={{backgroundColor:BgColor,color:TxtColor}}>
            <Link  className="font-bold text-xl" href={slug} >
            {title}
            </Link>
        </div>
    )

}
export default Jobs;