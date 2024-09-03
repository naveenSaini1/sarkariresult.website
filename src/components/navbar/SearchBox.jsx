"use client"

import { clientEndPoints } from "@/constant/ClientUrl";
import { useRouter } from "next/navigation";
import { useRef } from "react"

export default function SearchBox(){
    const searchRef = useRef();
    const rounter=  useRouter();

    const hanldeSubmitSearchQuery=(event)=>{
        if(event.key=="Enter" || event.key==undefined){
        if(!searchRef.current.value){
                alert("Please Enter Value")
                return;
        }
        console.log(searchRef.current.value)
        rounter.push(clientEndPoints.search+"/"+searchRef.current.value)



    }

    }
  
    return (
        <>
         <div class=" w-[50%] flex items-center justify-center mt-5 ">
        <div class="relative w-[50%]">
          <input
          onKeyDown={hanldeSubmitSearchQuery}
          ref={searchRef}
            type="text"
            placeholder="Search Post..."
            class="w-full px-4 py-2 pr-10 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button onClick={hanldeSubmitSearchQuery} 
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500 bg-gray-200 pl-4"
          >
           
           <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 2a9 9 0 0 1 7.032 14.617l3.675 3.676a1 1 0 0 1-1.32 1.497l-.094-.083-3.676-3.675A9 9 0 1 1 11 2m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14"/></svg>
          </button>
        </div>
      </div>
        
        </>
    )
}
