import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";
import fetchApiNoCache from "@/util/fetchNoCache";

export default async function SiteMap() {
    const data = await fetchApiNoCache(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getThePostForSiteMap, "GET") || [];
    data= data.reverse()
    let centerPost = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheCenters, "GET") || [];
    let statePost = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheStates, "GET") || [];
    statePost   =   statePost?.map((el)=>{
        return (
            {
                url: `${BASE_URL}/${"category/" + el+"?page=1"}`,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 0.8,

            }
        ) 
    })

    centerPost  =   centerPost?.map((el)=>{
        return (
            {
                url: `${BASE_URL}/${"category/" + el+"?page=1"}`,
                lastModified: new Date(),
                changeFrequency: "daily",
                priority: 0.8,

            }
        ) 
    })
    const allPost = data?.map((el) => {
    
        return (
            {
                url: `${BASE_URL}/${el?.url}`,
                lastModified: el.timestamp,
                changeFrequency: "daily",
                priority: 0.8,

            }
        )
    })

    return (
        [
            {
                url: BASE_URL, lastModified: new Date(), changeFrequency: "daily",
                priority: 1,
            },
            {
                url: BASE_URL + clientEndPoints.about, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.admitCard, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.answerKey, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.contact, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.privacy, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.result, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.search, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.syllabus, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.viewAll, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            {
                url: BASE_URL + clientEndPoints.dailyupdates, lastModified: new Date(), changeFrequency: "daily",
                priority: 0.9,
            },
            ...centerPost,
            ...statePost,
            ...allPost
        ]
    )
}