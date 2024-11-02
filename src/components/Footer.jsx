import React from 'react'
import { MdMovie } from "react-icons/md";
import { SiCmake } from "react-icons/si";


const Footer = () => {
  return (
    <div>
        <footer class="footer rounded-md mb-4 flex p-5 items-center bg-slate-500 dark:bg-blue-900 gap-10 justify-evenly mt-10 h-[150px]">
        <div className=' flex'>
        <SiCmake className=' mt-1 mr-1' />
        Made by Mustfa Hilmi
        </div>
        <div className='flex'>
        <MdMovie className='mt-1 mr-1' /> MovieAPP-2024

        </div>
        <div>
            Bir film sitesine dair her şey
        </div>
        
    </footer>
    </div>
  )
}

export default Footer