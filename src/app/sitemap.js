import { BASE_URL } from "@/constant/ClientUrl";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

export default async function SiteMap (){
    const data = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getThePostForSiteMap, "GET") || [];
    const allPost=data?.map((el)=>{
        return (
            {
                url:`${BASE_URL}${el?.url}`,
                lastModified:new Date()
                
            }
        )
    })

    return (
        [
            {url:BASE_URL,lastModified:new Date()},
            ...allPost
        ]
    )
}