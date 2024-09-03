
import Link from "next/link";

export default function CardComponent({ title, category, url }) {
    return (
        <>

            <article className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{category}</p>
                    </div>
                    <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300">
                        <span className="mr-1"><Link href={"/" + url}>Details</Link> </span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </button>
                </div>
            </article>
        </>
    )
}