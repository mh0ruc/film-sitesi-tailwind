
import Movies from '@/components/Movies';
import React from 'react';



const Page = async ({searchParams}) => {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre  : "trending/all/day"}?api_key=3a80eea9d56b0ae90b1bc4a49ad22113&language=en-us&page=1`, {next: {revalidate: 10000}})
  const data = await res.json()
//console.log(searchParams.genre,"params")
//console.log(data,"data")
  return (<>
  <div className='sm:gap-3 md:gap-2  imgcontainer flex flex-wrap justify-evenly  gap-4 items-start'>
      {data?.results?.map((dt, i) => (
        <Movies  key={i} dt={dt} />
      ))}
    </div>
  </>
   
  );
};

export default Page;
