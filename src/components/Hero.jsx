"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-24 md:py-32 container mx-auto mt-5">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full"></div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-5 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur"
                >
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                        🚀 Learn from industry experts
                    </p>
                </motion.div>

                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight"
                >
                    Upgrade Your <span className="text-primary">Skills</span> & Build Your Future
                </motion.h1>

                <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                >
                    Master Web Development, Design, and Digital Marketing with SkillSphere.
                    Learn from real-world projects and grow your career with confidence.
                </motion.p>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        as={Link}
                        href="/courses"
                        color="primary"
                        size="lg"
                        className="font-bold px-10 shadow-lg"
                    >
                        Explore Courses
                    </Button>

                    <Button
                        as={Link}
                        href="/signup"
                        variant="bordered"
                        size="lg"
                        className="font-bold px-10 hover:bg-primary/10"
                    >
                        Join Now
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 border-t border-gray-200/30 pt-10 w-full max-w-4xl"
                >
                    {[
                        { value: "10k+", label: "Students" },
                        { value: "50+", label: "Courses" },
                        { value: "100+", label: "Instructors" },
                        { value: "4.8★", label: "Rating" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <h4 className="text-3xl font-bold text-primary">{item.value}</h4>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;