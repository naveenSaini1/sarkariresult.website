import DailyUpdates from "@/components/newUpdates/DailyUpdates";
import TodayUpdate from "@/components/newUpdates/TodayUpdate";

const ContactPage = ({searchParams}) => {
    let page=searchParams?searchParams.page:1;
    return (
        <>
            <div className="  flex items-center justify-center">

                <DailyUpdates  page={page}/>
            </div>
        </>
    )
}

export default ContactPage;