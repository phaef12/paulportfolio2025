// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
<main className="flex flex-col items-center justify-start p-6 gap-6">

        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg relative">
          <Image
            src="/me.jpg"
            alt="Paul Haefeli"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="bg-blue-200 rounded-lg shadow-lg p-6 md:p-10 max-w-2xl text-left">
          <span className="text-3xl font-bold text-blue-900 block mb-2">
            Paul Haefeli
          </span>
          <span className="text-base text-gray-700 font-medium block">
            <span className="font-bold">Home base:</span> Dallas / Fort Worth, Texas
          </span>
          <span className="text-base text-gray-700 font-medium block">
            <span className="font-bold">Day job:</span> Senior Support Escalation Engineer at Microsoft
          </span>
          <span className="text-base text-gray-700 font-medium block">
            <span className="font-bold">Life:</span> Husband, Dad, Car guy, Gamer, Lifter, Rower, Photographer
          </span>
           <span className="text-base text-gray-700 font-medium block p-4">
          Professionally, Paul is a Data & IT professional with 10+ years of experience in relational database management, cloud platforms (Azure), and 
          high-availability solutions. Paul has expertise in SQL Server, PostgreSQL, MySQL, and MariaDB, with proven success in 
          performance tuning, HA/DR implementations, and large-scale troubleshooting. Paul has been recognized for bridging technical and 
          executive communication, mentoring teams, and delivering solutions under high-pressure, enterprise environments. 
          <br /><br />
          When not working, Paul enjoys spending time with his wife and two children, visiting parks, the zoo, museums, and reading all the books! 
          Paul also enjoys playing with his two Golden Retrievers. Other hobbies include gaming, which he also uses to keep in touch with friends and old colleagues, amateur photography, and cars.  
          </span>
        </div>
      <Link
        href="/experience"
        className="bg-blue-200 text-blue-900 px-6 py-2 rounded-lg shadow transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800 hover:text-blue-200"
        >
        View Experience
      </Link>
      </main>
    </div>
  );
}


