
"use client"
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import Menuitem from './Menuitem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [keyword,setkeyword]=useState("")
    const router=useRouter()
    const menu=[
        {
            name:"About",
            url:"/about"
        },
        {
            name:"Sign in",
            url:"/login"
        }
    ]
    const searchFunc=(e)=>{
        if(keyword.length>=3){
            router.push(`/search/${keyword}`)

        }

    }
  return (
    <div className='mb-4 flex items-center gap-7 h-20 p-5'>
        <div className= ' pb-5 bg-blue-500 p-3 text-2xl font-bold rounded-lg'>
          MOVİEAPP
        </div>
        <div  className='  flex flex-1 items-center gap-2 border p-3 rounded-lg '>
            <input onChange={e=>setkeyword(e.target.value)} onKeyDown={searchFunc} type="text" className=' bg-transparent outline-none flex flex-1' placeholder='arama yap' />
            <IoMdSearch size={30} onClick={searchFunc} className='cursor-pointer dark:bg-black dark:hover:text-black  dark:hover:bg-white transition-all'  />

        </div>
        <ThemeComp />
        
{
    menu.map((mn,i)=>(
        <Menuitem mn={mn} key={i}/>
    ))
}

    </div>
  )
}

export default Header