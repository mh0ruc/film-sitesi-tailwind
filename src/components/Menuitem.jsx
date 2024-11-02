import Link from 'next/link'
import React from 'react'

const Menuitem = ({mn,i}) => {
  return (
    <Link href={mn.url}>{mn.name}</Link>
  )
}

export default Menuitem