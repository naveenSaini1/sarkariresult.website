import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";
import Link from "next/link";

export default async function SingleDataUpdates({ matchingDate }) {
    let data = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheUpdatesByMatchingDate + "/" + matchingDate, "GET") || [];
    return (
        <>
            {data?.map((item,index) => {
             return   <li key={item.url} className="px-4 py-3 hover:bg-gray-50">
                    <div className="flex items-start">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 font-semibold text-sm mr-3">
                            {index+1}
                        </span>
                        <Link href={item.url} className="underline text-red-600">{item.content}</Link>
                    </div>
                </li>
            })}
        </>
    )
}