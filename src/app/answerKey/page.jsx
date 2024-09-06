
import EachPageData from "@/components/EachPageData/EachPageData";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

let p = `  Stay updated with the latest notifications for government job admit cards, including SSC, UPSC, Banking, and Railway exams.
                    Find all the details you need to download your admit card quickly and easily.`
export default async function AnswerKey({ searchParams }) {
    let totalNumber = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheTotalNumberPagination + "/admit", "GET") || 0;

    return (
        <div className="flex">

            <EachPageData searchParams={searchParams} totalNumber={totalNumber} courseName={"answerKey"} description={p} />
        </div>

    )
}
