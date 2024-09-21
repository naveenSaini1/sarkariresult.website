import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";
import fetchApiNoCache from "@/util/fetchNoCache";

export default async function SiteMap (){
    const data = await fetchApiNoCache(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getThePostForSiteMap, "GET") || [];
   console.log(data)
    const allPost=data?.map((el)=>{
        return (
            {
                url:`${BASE_URL}/${el?.url}`,
                lastModified:el.timestamp
                
            }
        )
    })

    return (
        [
            {url:BASE_URL,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.about,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.admitCard,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.answerKey,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.contact,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.privacy,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.result,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.search,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.syllabus,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.viewAll,lastModified:new Date()},
            {url:BASE_URL+clientEndPoints.dailyupdates,lastModified:new Date()},
            ...allPost
        ]
    )
}