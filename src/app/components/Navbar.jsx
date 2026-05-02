"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b px-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">


                <Link href={"/"} className="flex gap-2 items-center">
                    <h3 className="font-black text-xl tracking-tighter">
                        Skill<span className="text-primary">Sphere</span>
                    </h3>
                </Link>


                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li>
                        <Link href={"/"} className="hover:text-primary transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href={"/courses"} className="hover:text-primary transition-colors">Courses</Link>
                    </li>
                    <li>
                        <Link href={"/profile"} className="hover:text-primary transition-colors">My Profile</Link>
                    </li>
                </ul>


                <div className="flex items-center gap-4">
                    <ul className="flex items-center  text-sm gap-5">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                        <li>
                            <Link href={"/signout"}>SignOut</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;