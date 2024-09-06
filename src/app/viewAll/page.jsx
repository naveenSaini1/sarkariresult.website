import JobSection from "@/components/jobSection/JobSection";
import CardComponent from "@/components/PostLink/Card";
import Pagination from "@/components/PostLink/Pagination";
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";

let p=`Get all The Syllabus`;
const SyllabusPage=async ({ searchParams })=>{
    let page=searchParams.page == undefined ? 1 : searchParams.page;
    let totalNumber = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheTotalNumberPages, "GET") || 0;
    console.log(totalNumber);
    let data = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getThePost + "/" + page, "GET");
   
    return (
        <>
        <div className=" w-[100%] px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600">Stay informed with our recent announcements</p>
            </div>
            <div className="bg-white rounded-xl shadow-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-600">
                  <div>
                  
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {data.length > 0 && data.map((update, index) => (
  
  
                  <CardComponent key={index} title={update.title} category={"search result"} url={update.url} />
                ))}
              </div>
              <Pagination currentPage={searchParams.page} totalPage={totalNumber} page={"viewAll"} />
  
            </div>
  
          </div>
          <div className="w-[95%] gap-6 m-auto  grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))]">
     <JobSection title="Admit Card" course={"admit"}/>
     <JobSection title="Result" course={"result"}/>
     <JobSection title="Syllabus" course={"syllabus"}/>
     <JobSection title="Answer Key" course={"answerKey"}/>

     

     </div>
        </div>

  
      </>

    )
}

export default SyllabusPage;