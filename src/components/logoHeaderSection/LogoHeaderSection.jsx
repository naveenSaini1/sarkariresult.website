import { API_HOST_ADDRESS, endPoints, PUBLIC_PREFIX } from "@/constant/ServerUrl";
import fetchApi from "@/util/fetch";
import Image from "next/image";
import Link from "next/link";

const LogoHeaderSection = async () => {
    let centerPost = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheCenters, "GET") || [];
    let statePost = await fetchApi(API_HOST_ADDRESS + PUBLIC_PREFIX + endPoints.getTheStates, "GET") || [];

    return (
        <>

            <header className="mb-10">
                <section className="flex w-full ">
                    <div className="w-[20%] flex justify-center items-center">
                        <Image src={"/logo.png"} width={200} height={100} />
                    </div>
                    <div className="w-[70%] p-1 flex justify-center items-center">
                        <p>Sarkari Alert Result is an online portal where you can easily access government job notifications, including the latest job updates, admit cards, and Sarkari Naukri results.</p>

                    </div>
                </section>
                <section className="w-[80%] m-auto">
                    <ul className="flex list-none gap-2 flex-wrap">
                    {centerPost.map((el) => {
                            return (
                                <li className="bg-thridBgColor px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg text-xl">
                                    <Link href={"/category/" + el+"?page=1"}>{el}</Link>
                                </li>
                            )
                        })}

                    </ul>
                    <ul className="flex mt-1 gap-2 items-center flex-wrap">
                        {/* <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>AP</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>AS</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>BR</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>CG</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>DL</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>GJ</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>HP</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>HR</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>JH</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>KA</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>KL</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>MH</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>MP</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>OD</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>PB</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>RJ</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>TN</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>TS</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>UK</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>UP</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>WB</Link></li>
                        <li className="bg-thridBgColor text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={""}>Other State</Link></li> */}

                        {statePost.map((el) => {                            return (
                                <li className="bg-thridBgColor px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg text-xl">
                                    <Link href={"/category/" + el+"?page=1"}>{el}</Link>
                                </li>
                            )
                        })}

                    </ul>
                    <ul className="flex mt-1">
                        <li className="bg-thridBgColor  text-xl px-3 py-2 rounded-xl hover:bg-primaryBgColor hover:text-black text-primaryTxtColor shadow-lg"><Link href={"/category/collage-admissom/?page=1"}> Collage Addmissions</Link></li>
                    </ul>


                </section>


            </header>

        </>
    )
}
export default LogoHeaderSection;