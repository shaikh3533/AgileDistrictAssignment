import React from 'react'
import classes from '../../styles/Navbar.module.css'
import Link from 'next/link'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0 bordr">
            <div className="container-fluid p-0">
                <ul className="mx-auto">
                    <Link href='/'>
                        <button className='btn bg_Insta fs-2 text-light p-2 m-3'>Images Page</button>
                    </Link>
                    <Link href='/ProfilePage'>
                        <button className='btn bg_Insta fs-2 text-light p-2 m-3'>Profile Page</button>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar