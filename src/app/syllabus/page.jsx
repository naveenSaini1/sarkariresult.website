import EachPageData from "@/components/EachPageData/EachPageData";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

let p=`Get all The Syllabus`;
const SyllabusPage=async ({searchParams})=>{
    let totalNumber=await fetchApi(API_HOST_ADDRESS+PUBLIC_PREFIX+endPoints.getTheTotalNumberPagination+"/syllabus","GET") || 0;

    return (
        <div className="flex">
            
                <EachPageData searchParams={searchParams} totalNumber={totalNumber} courseName={"syllabus"} description={p} />
            </div>

    )
}

export default SyllabusPage;