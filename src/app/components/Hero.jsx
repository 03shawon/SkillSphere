"use client";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative w-full bg-background overflow-hidden py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                        Learn from the experts
                    </p>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 max-w-4xl">
                    Upgrade Your <span className="text-primary">Skills</span> Today 🚀
                </h1>

                <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                    Master Web Development, Design, and Marketing with SkillSphere. Join thousands of students learning from industry leaders worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        as={Link}
                        href="/courses"
                        color="primary"
                        size="lg"
                        className="font-bold px-8"
                    >
                        Explore Courses
                    </Button>
                    <Button
                        as={Link}
                        href="/signup"
                        variant="bordered"
                        size="lg"
                        className="font-bold px-8"
                    >
                        Join Now
                    </Button>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t pt-10 w-full max-w-4xl">
                    <div>
                        <h4 className="text-2xl font-bold">10k+</h4>
                        <p className="text-sm text-muted-foreground">Students</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">50+</h4>
                        <p className="text-sm text-muted-foreground">Courses</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">100+</h4>
                        <p className="text-sm text-muted-foreground">Instructors</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">4.8/5</h4>
                        <p className="text-sm text-muted-foreground">Rating</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;