import React, { useState } from 'react'

export default function Figmas() {
    return (
        <div className='h-screen bg-red-500'>
            <Nav />
            <Hero />
        </div>
    )
}

function Hero() {
    return (
        <div className='flex flex-row gap-2 w-screen mt-8 p-2'>
            <div className='w-[50%]'>
                <h1 className='sm:text-[4rem] text-[1rem] text-white'>
                    Let's bring your <br />
                    team together <br />
                    in oneclick
                </h1>
                <p className='sm:text-[2rem] text-[0.7rem]'>
                    We help you to manage of your work <br /> and daily task in the
                    office
                </p>
            </div>
            <div className='flex justify-end w-[50%]'>
                <img src="https:ecusjkt7jd2.exactdn.com/wp-content/uploads/2019/07/Free-Stock-Images-1.jpg?strip=all&lossy=1&quality=75&webp=70&sharp=1&w=848&ssl=1" className='sm:h-[35rem] sm:w-[35rem] w-[8rem] h-[8rem]' />
            </div>
        </div>
    )
}


function Nav() {
    const [menu, setMenu] = useState(false)

    function fig() {
        setMenu(!menu)
    }

    return (
        <div className='w-screen justify-end flex'>
            <nav className='sm:flex hidden justify-between w-screen pl-2 pr-4 h-10 items-center'>
                <span className='flex-[0.2]'>Onclick </span>
                <ul className='flex-1 flex justify-evenly'>
                    <li>|</li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About Us</li>
                </ul>
                <ul className='flex-1 flex justify-end gap-2 '>
                    <li >Login</li>
                    <li >Sign Up</li>
                </ul>

            </nav>
            <button className='sm:hidden flex float-right' onClick={fig}>&#8801;</button>
            {menu && <Mob />}
        </div>
    )
}

function Mob() {
    return (
        <div className='sm:hidden'><nav><ul className=''>
            <li>|</li>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>

            <li >Login</li>
            <li >Sign Up</li>
        </ul>
        </nav>
        </div>

    )
}