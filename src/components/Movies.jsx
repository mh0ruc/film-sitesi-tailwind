"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
    const router=useRouter()
  const imagePath =
    dt?.backdrop_path || dt?.poster_path
      ? `https://image.tmdb.org/t/p/w500${dt?.backdrop_path || dt?.poster_path}`
      : "/default-image.jpg";

  return (
    <>
      <div onClick={()=>router.push(`/movie/${dt?.id}`)} className="sm md:text-md xl:w-[350px]   md:w-[250px] lg:w-[300px]   bg-white dark:bg-black cursor-pointer card  sm:w-[200px] w-[470px]  relative  ">
        <Image
          width={470}
          height={400}
          src={imagePath}
          alt={dt?.title || "Movie image"}
          className=" md:w-[250px] sm:w-[200px] xl:w-[350px]  lg:w-[300px]"
        />
      

        <div className=" xl:w-[350px] lg:w-[300px] md:w-[250px] sm:w-[200px] w-[470px] min-h-[150px] dark:bg-gray-800 bg-slate-300 card_info dark:bg-opacity-70  bg-opacity-70  absolute  bottom-0  p-1 flex justify-between gap-2 h-max ">
        <div className=" md:text-sm   sm:text-sm cursor-pointer text-2xl font-bold ">{dt?.title}</div>
        <div className=" ">imdb : {dt?.vote_average}  <br /> {dt?.release_date}</div>

        </div>
        

      </div>
    </>
  );
};

export default Movies;
