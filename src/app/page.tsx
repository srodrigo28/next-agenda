import Link from "next/link";

export default function Home(){
  return(
      <div className="w-full flex flex-col md:flex-row justify-between bg-white p-4 h-screen">
        <div className="bg-blue-500 h-[50vh] md:h-[100vh] w-full"></div>  
        <div className="bg-white h-[50vh] md:h-[100vh] w-full"></div>  
      </div> 
  )
}