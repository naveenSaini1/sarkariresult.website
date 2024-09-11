
import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from '@/constant/ServerUrl';
import fetchApiNoCache from '@/util/fetchNoCache';
import SingleDataUpdates from './SingleDataUpdates';
import Pagination from '../PostLink/Pagination';



const DailyUpdates = async ({ page = 1 }) => {

  const totalPage = await fetchApiNoCache(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheTodayUpdateTotalNumber, "GET") || 0;
  const dates = await fetchApiNoCache(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheAllMatchingDates + "/" + page, "GET") || [];
  

  return (
    <div className="w-[80%] mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">All Daily Updates</h2>
      {dates.map((day) => (
        <div key={day} className="bg-white shadow-md rounded-lg overflow-hidden">
          <button
            className="w-full px-4 py-3 flex justify-between items-center bg-indigo-100 hover:bg-indigo-200 transition-colors"
          >
            <span className="text-secondaryBgColor text-center block w-full text-2xl font-bold">{day}</span>
          </button>
            <ul className="divide-y divide-gray-200">
              <SingleDataUpdates matchingDate={day} key={day} />
            </ul>
        </div>
      ))}

<Pagination currentPage={page} totalPage={totalPage} page={"" +"dailyupdates"} />

    </div>
  );
};

export default DailyUpdates;