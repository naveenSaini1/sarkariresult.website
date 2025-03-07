import ActiveJobs from "@/components/ActiveJobs/ActiveJobs";
import HomeDetails from "@/components/Footer/HomeDetails";
import JobSection from "@/components/jobSection/JobSection";
import NewUpdates from "@/components/newUpdates/NewUpdates";
import TodayUpdate from "@/components/newUpdates/TodayUpdate";
import Image from "next/image";

export default function Home() {

  return (
    <main className="">
     <ActiveJobs/>
     <TodayUpdate/>
     <NewUpdates/>
     <div className="w-[95%] gap-6 m-auto  grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))]">
     <JobSection title="Admit Card" course={"admit"}/>
     <JobSection title="Result" course={"result"}/>
     <JobSection title="Syllabus" course={"syllabus"}/>
     <JobSection title="Answer Key" course={"answerKey"}/>

     

     </div>
     <div className="w-[95%] m-auto">

     <HomeDetails/>

     </div>

    </main>
  );
}
