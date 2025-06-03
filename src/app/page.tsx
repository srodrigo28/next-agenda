import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home(){
  return(
      <div className="w-full flex justify-between bg-slate-900 p-4">
        <h1 className="text-white font-bold tracking-wide text-2xl"> Home </h1>
        <Link href="/authentication" className="p-2 cursor-pointer bg-blue-700 px-5 text-white rounded-md">
            <span>Login</span>
        </Link>
    </div> 
  )
}