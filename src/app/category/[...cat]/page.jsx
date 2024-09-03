import EachPageData from "@/components/EachPageData/EachPageData";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

let p=`sarkarresult is websit for students and who are preparing for their future`
const CatPage= async({params,searchParams})=>{
    let totalNumber=await fetchApi(API_HOST_ADDRESS+PUBLIC_PREFIX+endPoints.getTheTotalNumberPagination+"/"+params.cat,"GET") || 0;

    return (
        <>
            <div className="flex">
            <EachPageData searchParams={searchParams} totalNumber={totalNumber} courseName={params.cat} description={p} />
            </div>

        </>
    )
}
export default CatPage;