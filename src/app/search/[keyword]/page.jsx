import React from 'react'
import Movies from '@/components/Movies';
const Page = async ({params}) => {
    const keyword=params.keyword;
    
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3a80eea9d56b0ae90b1bc4a49ad22113&query=${keyword}&language=en-US&include_adult=false`)
const data= await res.json()

  return (
    <div className='flex flex-wrap justify-center gap-4 '>
         {
            !data.results? <div>aranılan bulunamadı</div>  :

    data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))
    }
    </div>
  )
}

export default Page