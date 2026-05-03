"use client";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t py-10 bg-gray-200 text-foreground container mx-auto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                    <div>
                        <h4 className="font-bold mb-3">Contact Info</h4>
                        <p className="text-sm text-muted-foreground">Email: support@skillsphere.com</p>
                        <p className="text-sm text-muted-foreground">Phone: +880 1234 567890</p>
                        <p className="text-sm text-muted-foreground">Address: Dhaka, Bangladesh</p>
                    </div>


                    <div>
                        <h4 className="font-bold mb-3">Social Links</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/" className=" flex hover:text-primary gap-1 items-center"><FaFacebookF />Facebook</Link>
                            <Link href="/" className="hover:text-primary flex gap-1 items-center"><FaLinkedin />LinkedIn</Link>
                            <Link href="/" className="hover:text-primary flex gap-1 items-center"><FaTwitter />Twitter</Link>
                        </div>
                    </div>


                    <div>
                        <h4 className="font-bold mb-3">Legal</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
                            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                        </div>
                    </div>

                </div>

                <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;