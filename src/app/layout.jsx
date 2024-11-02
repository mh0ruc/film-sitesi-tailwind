import React from 'react'
import './globals.css'
import Header from '@/components/header'
import Providers from './Providers'
import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
           <Providers>
           <Header/>
           <Tabs/>
           {children}
           <Footer/>
           </Providers>
          
            
        </body>
    </html>
  )
}

export default layout