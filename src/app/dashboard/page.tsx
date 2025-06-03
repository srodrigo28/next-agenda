import Link from "next/link";

const Dashboard = () => {
    return ( 
    <div className="w-full flex justify-between bg-sky-500 p-4">
        <h1 className="text-white font-bold tracking-wide text-2xl"> Dashboard </h1>
        <Link href="/" className="p-2 cursor-pointer bg-red-600 px-5 text-white rounded-md">
            <span>Sair</span>
        </Link>
    </div> 
);
}
 
export default Dashboard;