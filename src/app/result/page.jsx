import EachPageData from "@/components/EachPageData/EachPageData";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

let p=`this is page about result`

const ResultPage = async({ searchParams }) => {
    let totalNumber=await fetchApi(API_HOST_ADDRESS+PUBLIC_PREFIX+endPoints.getTheTotalNumberPagination+"/result","GET") || 0;

    return (
        <>
            <div className="flex">
            <EachPageData searchParams={searchParams} totalNumber={totalNumber} courseName={"result"} description={p} />
            </div>

        </>
    )
}

export default ResultPage;