"use client";

import { useState } from "react";
import TopCoursesCard from "./TopCoursesCard";

const SearchCourses = ({ courses = [] }) => {
    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="">

            <input
                type="text"
                placeholder="Search by title..."
                className="border-2 border-primary/20 px-4 py-3 mb-8 w-full max-w-md mx-auto block rounded-full focus:border-primary outline-none transition-all shadow-sm"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCourses.map(course => (
                    <TopCoursesCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default SearchCourses;