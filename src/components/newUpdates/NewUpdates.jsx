import { API_HOST_ADDRESS, endPoints, HOST_ADDRESS, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";
import Link from "next/link";

const NewUpdates = async () => {
  let data = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getThePost + "/" + 1, "GET");
  // console.log(data);

  return (
    <>
      <section className="">
        <div className="w-[90%] m-auto mt-10 border-4 border-blue-500 rounded-xl shadow-2xl animate-pulse">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-4 rounded-t-xl">
            <h3 className="text-center text-white font-bold text-2xl">
              🔔 New Updates
            </h3>
          </div>
          <div className="bg-white p-6">
            <ul className="flex flex-wrap gap-4 justify-start">
              {data?.map((el, index) => (
                <li
                  className="w-full md:w-[45%] flex items-start gap-2 text-lg font-semibold text-gray-800 hover:text-red-500 transition duration-300 blinking-text "
                  key={el.url}
                >
                  <span className="text-blue-500">{index + 1}.</span>
                  <Link href={el.url} className="underline hover:no-underline ">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center w-full mt-5 text-xl font-bold">
            <h4 className="text-center w-full text-red-600 underline "><Link  className="block text-center" href={"/viewAll?page=1"}>View More</Link></h4>
        </div>
        </div>

      </section>

    </>
  )
}


export default NewUpdates;