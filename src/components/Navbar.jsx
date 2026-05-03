"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b px-4 sticky top-0 z-50 bg-gray-200 backdrop-blur-md container mx-auto">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>

                    <Link href={"/"} className="flex gap-2 items-center">
                        <h3 className="font-black text-xl tracking-tighter">
                            Skill<span className="text-primary">Sphere</span>
                        </h3>
                    </Link>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/all-courses">All Courses</Link></li>
                    <li><Link href="/profile">My Profile</Link></li>
                </ul>

                <div className="flex items-center gap-4">
                    <ul className="flex items-center text-sm gap-5">
                        <li><Link href="/signup">SignUp</Link></li>
                        <li><Link href="/signin">SignIn</Link></li>
                        <li><Link href="/signout">SignOut</Link></li>
                    </ul>
                </div>
            </nav>

            {open && (
                <div className="md:hidden mt-3 pb-3 border-t">
                    <ul className="flex flex-col gap-4 pt-3 text-sm font-medium">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-courses">All Courses</Link></li>
                        <li><Link href="/profile">My Profile</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;