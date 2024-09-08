
import ActiveJobs from "@/components/ActiveJobs/ActiveJobs";
import JobSection from "@/components/jobSection/JobSection";
import NewUpdates from "@/components/newUpdates/NewUpdates";
import PostCardComponent from "@/components/PostLink/PostCard";

export default function EachPageData({courseName,searchParams,totalNumber,description}) {
    return (
        <>

            <div className="w-[100%] sm:w-[90%] md:w-[70%]">
                <div>
                <PostCardComponent title={courseName} category={"Hall Ticket"} searchParams={searchParams.page == undefined ? { page: 1 } : searchParams} courseName={courseName} totalPage={totalNumber} />
                </div>
                <div>
                <p className="text-xl text-gray-500 mt-2 p-10">
                  {description}
                </p>
                </div>
               
                <div>
                    <NewUpdates />
                </div>

                <div className="gap-6 m-auto  grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))]">
                    <JobSection title={"Admit Card"} course={"admit"} />
                    <JobSection title={"Syllabus"} course={"syllabus"} />
                    <JobSection title={"Answer key"} course={"answerKey"} />

                </div>

            </div>

            <div className="hidden overflow-y-scroll flex-col justify-start items-center lg:w-[40%] w-[25%] md:w-[30%] sm:w-[20%] sm:block "
            >
                <div className="">
                <ActiveJobs />
                </div>
                <div>
                <JobSection title={"result"} course={"result"} />

                </div>

            </div>

        </>
    )
}
