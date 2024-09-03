import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";
import Link from "next/link";

const JobSection= async ({title,course})=>{
    let data=await fetchApi(API_HOST_ADDRESS+PUBLIC_PREFIX+endPoints.getThePostByCourse+"/"+(course==undefined?"HR":course)+"/"+1,"GET") || [];
    if(data.length==0)return;
    return (
        <div className="flex min-w-[20rem] max-w-[30rem] border flex-col mt-10 justify-center items-start rounded-xl p-2 ">
        <h2 className="bg-secondaryBgColor p-5 w-full text-center text-2xl text-primaryTxtColor font-black">{title}</h2>
        <div>

        </div>
        <div>
            <ul className="list-disc text-thridBgColor flex flex-col px-10 justify-center items-start">
                {data.length > 0 && data.map((el)=>{
                    return (
                        <li key={el.url} className=" py-2 underline"> <Link href={"/"+el.url}>{el.title} </Link></li>

                    )
                })}
            </ul>

        </div>
        <div className="flex justify-center w-full mt-5 text-xl font-bold">
            <h4 className="text-center w-full text-red-600 underline "><Link  className="block text-center" href={""}>View More</Link></h4>
        </div>
        </div>
    )
}
export default JobSection;