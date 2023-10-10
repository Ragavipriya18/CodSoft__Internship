import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
// import {Link} from "react-router-dom";
import {Link} from 'react-scroll';


const NavBar = () => {

    const [nav,setNav] = useState(false);

    const links =[
        {
        id: 1,
        link: 'home'
        },
        {
            id: 2,
            link: 'biography'
            },
            {
                id: 3,
                link: 'achievements'
                },
                {
                    id:4,
                    link:'timeline'
                },
                {
                    id:5,
                    link:'gallery'
                }
        ]
 
            const offset = -100;

  return (
    <div className="flex justify-between items-center px-4 rounded-b-2xl bg-white h-14 w-full text-black fixed z-20">
        

    <ul className='hidden md:flex'>

        {links.map(({id, link}) => (
                 <li key={id} className='px-4 cursor-pointer  capitalize font-medium  font-serif hover:scale-110 duration-200'>
                 <Link to={link} smooth duration={500} offset={offset} spy={true} activeClass="active">{link}
                    </Link>
                </li>
      
        ))}

    </ul>
    
    <div onClick={() =>setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={25} color='black' /> : <FaBars size={25} color='black'/> }
    </div>


    {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-500 text-white md:hidden '>
             {links.map(({id, link}) => (
                  <li key={id} className='px-4  cursor-pointer capitalize py-6 text-2xl hover:scale-110'><Link onClick={() =>setNav(!nav)} to={link} smooth duration={500} offset={offset} spy={true} activeClass="active">{link}
                  </Link>
                  </li>
             ))};
 
     </ul>
    )}

<img className="rounded-3xl "src='logo.png' alt='' height="40px" width="40px"></img>

    </div>
  )
}

export default NavBar;