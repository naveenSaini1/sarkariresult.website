import { BASE_URL } from "@/constant/ClientUrl";

export default function Robots(){
    return (
        {
            rules:{
                userAgent:"*",
                allow:"/",
                disallow:[]
            },
            sitemap:`${BASE_URL}sitemap.xml`
        }
    )
}