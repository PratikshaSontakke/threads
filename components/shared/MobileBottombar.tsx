'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function MobileBottombar() {
  const pathname = usePathname()
  const router = useRouter()
  return (
   <section className='bottombar'>
    <div className='bottombar_container'>

    {sidebarLinks.map((link)=>{ 

const isActiveLink = (pathname.includes(link.route) && link.route.length>1) || pathname === link.route
return (

<Link href={link.route} key={link.label} className={`bottombar_link ${isActiveLink ? 'bg-primary-500': ''}`}> 
<Image src={link.imgURL} alt={link.label} width={24} height={24}/>
{/* .split(/\s+/)[0] only takes first word */}
<p className='text-subtle-medium text-light-1 max-sm:hidden'>{link.label.split(/\s+/)[0]}</p> </Link>
)}

)}
     

    </div>
   </section>
  )
}

export default MobileBottombar