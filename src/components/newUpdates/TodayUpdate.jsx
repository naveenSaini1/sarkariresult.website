import { API_HOST_ADDRESS, endPoints, HOST_ADDRESS, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApiNoCache from "@/util/fetchNoCache";
import Link from "next/link";

const TodayUpdate = async () => {
  let data = await fetchApiNoCache(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheTodayUpdateContent, "GET") || {};
  console.log(data);

  return (
    <>
      <section className="">
        <div className="w-[90%] m-auto mt-10 border-4 border-blue-500 rounded-xl shadow-2xl ">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-4 rounded-t-xl">
            <h3 className="text-center text-white font-bold text-2xl">
              Today Updates ({data.date})
            </h3>
          </div>
          <div className="bg-white p-6">
            <ul className="flex flex-wrap gap-4 justify-start">
              {data?.obj?.map((el, index) => (
                <li
                  className="w-full md:w-[45%] flex items-start gap-2 text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300 "
                  key={el.url}
                >
                  <span className="text-blue-500">{index + 1}.</span>
                  
                    <Link href={el.url} className="underline hover:no-underline ">
                    {el.content}
                  </Link>
                  
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center w-full mt-5 text-xl font-bold">
            <h4 className="text-center w-full text-red-600 underline block "><Link  className="block text-center" href={"/dailyupdates?page=1"}>View All</Link></h4>
        </div>
        </div>

      </section>

    </>
  )
}


export default TodayUpdate;