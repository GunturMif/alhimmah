"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
};

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = ['Home', 'Program', 'About'];

    return (
        <nav className={`navbar px-5 lg:px-20 ${scrollY > 100 ? 'shadow-md' : ''} sticky top-0 bg-white z-10`}>
            <div className="navbar-start">
                <div className="rounded-full w-fit">
                    <img src="/logo/elephant.png" alt="Logo Elephant" className="h-20 w-20 object-contain" />
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                {!showMenu ? (
                    <HiOutlineMenu
                        className="text-4xl text-black cursor-pointer"
                        onClick={() => setShowMenu(true)}
                    />
                ) : (
                    <MdOutlineClose
                        className="text-4xl text-black cursor-pointer"
                        onClick={() => setShowMenu(false)}
                    />
                )}
            </div>
            <motion.nav
                variants={variants}
                initial="closed"
                animate={showMenu ? "open" : "closed"}
                className={`navbar-menu border rounded-md bg-white lg:hidden ${showMenu ? 'block' : 'hidden'}`}
            >
                <motion.ul className="menu menu-vertical">
                    {navItems.map((item, index) => (
                        <motion.li key={index}>
                            <Link href={`/${item.toLowerCase()}`} className="menu-item text-teal-500 text-xl px-10">
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={`/${item.toLowerCase()}`} className="menu-item text-teal-500 text-2xl mx-2">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
