import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3a80eea9d56b0ae90b1bc4a49ad22113`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  const imagePath = `https://image.tmdb.org/t/p/w500${
    movieDetail?.backdrop_path || movieDetail?.poster_path
  }`;

  console.log(movieDetail, "detay");

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={imagePath}
        alt={movieDetail?.title || "Movie image"}
        className="opacity-20"
      />
      <div className="absolute  ">
        <div className=" flex text-4xl font-bold p-4 justify-between">
          {movieDetail?.title} ( {movieDetail?.vote_average} )
          <div className="text-4xl ">{movieDetail.release_date}</div>
        </div>

        <div className="p-4 text-xl w-[1200px]">{movieDetail.overview}</div>
        <div className="mx-4 my-4 border  w-32 hover:bg-white  hover:text-black p-4 rounded-md text-center text-lg cursor-pointer transition-colors ">Trail</div>
      
      </div>
    </div>
  );
};

export default Page;
