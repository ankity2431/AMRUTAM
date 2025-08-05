import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {
    const navBarItems = [
        {
            name: 'About Us',
            path: '/aboutus'
        },
        {
            name: 'OnBoarding',
            path: '/onboarding'
        },
        {
            name: 'FAQ',
            path: '/faq'
        },
        {
            name: 'Testimonials',
            path: '/testimonials'
        },]

  return (
    <div className='font-poppin font-thin flex justify-center flex-col items-center bg-[#FFF7E2] pb-4'>
      <div className='mb-4 mt-4'><img src={`${import.meta.env.BASE_URL}assets/companyLogo.png`} alt='logo' className=' h-10' /></div>
      <div>
        <ul className='flex justify-center items-center gap-x-10 gap-y-5'>
           {navBarItems.map((items , index)=><Link to={items.path}> <li className='hover:text-[#FF0000] cursor-pointer text-sm' key={index}>{items.name}</li></Link>)}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
