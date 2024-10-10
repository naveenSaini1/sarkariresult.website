import { getContrastColor, getRandomColor } from "@/util/RandomColor";
import Jobs from "./Jobs";
import fetchApi from "@/util/fetch";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApiNoCache from "@/util/fetchNoCache";


const ActiveJobs= async()=>{
    let data=await fetchApiNoCache(API_HOST_ADDRESS+PUBLIC_PREFIX+endPoints.getTheBulkPost,"GET") || [];
    return (
        <div className="mt-10 w-[80%] m-auto">
        {/* <h3 className="mb-4 text-3xl bg-secondaryBgColor text-primaryTxtColor px-2  rounded-xl inline-block">Active Jobs</h3> */}
        <div className=" justify-between items-center   gap-2 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
            
            {data.length>0 && data.map((el,index)=>{
            let bgColor=getRandomColor();
            let txtColor=getContrastColor(bgColor);

                return(
                    <Jobs title={el.title} slug={el.url} BgColor={bgColor} TxtColor={txtColor} key={index}/>
                )
            })}
      

        </div>
        </div>
    )
}
export default ActiveJobs;