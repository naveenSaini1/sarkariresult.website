
import EachPageData from "@/components/EachPageData/EachPageData";
import CardComponent from "@/components/PostLink/Card";
import Pagination from "@/components/PostLink/Pagination";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

export default async function SearchPage({ searchParams, params }) {
  let query = params.query ? decodeURIComponent(params.query[0]) : "";
  let form = new FormData();
  form.append("query", query)
  let totalNumber = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.searchThePostTotalNumberPagination, "POST", null, form) || 0;
  form.append("page", searchParams.page == undefined ? 1 : searchParams.page)
  let data = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.searchThePost, "POST", null, form) || [];
  return (
    <>
      <div className=" w-[100%] px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-600 mb-2">Searcded Result of  <span className="text-red-500"> "{query}"</span></h1>
            <p className="text-xl text-gray-600">Stay informed with our recent announcements</p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Search Result</h2>
              <div className="flex items-center text-gray-600">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {data.length > 0 && data.map((update, index) => (


                <CardComponent key={index} title={update.title} category={"search result"} url={update.url} />
              ))}
            </div>
            <Pagination currentPage={searchParams.page} totalPage={totalNumber} page={"" + params.query} />

          </div>

        </div>
      </div>

    </>
  )
}
