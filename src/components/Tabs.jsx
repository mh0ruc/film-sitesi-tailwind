"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { PiPopcornBold } from "react-icons/pi";
import { FaPlaneArrival } from "react-icons/fa6";
import { MdOutlineWhereToVote } from "react-icons/md";


const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      icon:<PiPopcornBold/>,
      name: "En popüler",
      url: "popular",
    },
    {
      icon:<MdOutlineWhereToVote/>,

      name: "En son Yüklenenler ",
      url: "latest",
    },
    {
      icon:<FaPlaneArrival/>,

      name: "yakında gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className=" rounded-md mb-4 flex p-5 items-center bg-slate-500 dark:bg-blue-900 gap-10 justify-evenly ">
      {tabs.map((tb, i) => (
        <Link
          className={`cursor-pointer hover:opacity-70 transition-opacity ${
            tb.url === genre
              ? " text-blue-500  font-bold" 
              : ""
          }`}
          href={`/?genre=${tb.url}`}
        >
          <div className=" bg-white dark:bg-black p-2 rounded   flex justify-between gap-2">
            <div>{tb.name} </div>
            <div className="mt-1 ">{tb.icon} </div>

            
            </div>

        </Link>
      ))}
    </div>
  );
};

export default Tabs;
