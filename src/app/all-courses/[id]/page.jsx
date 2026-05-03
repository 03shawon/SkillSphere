import { Button } from "@heroui/react";
import Image from "next/image";
import { FaClock, FaStar, FaUserAlt } from "react-icons/fa";
import { MdLayers } from "react-icons/md";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id)
    const res = await fetch('https://skillsphere-psi-two.vercel.app/courses.json')
    const data = await res.json()
    // console.log(courses)
    const course = data.find(course => course.id == id)
    return (
        <div className="min-h-screen py-8 px-4 bg-gray-100 container mx-auto mt-5 mb-5 ">
            <div className="max-w-4xl mx-auto rounded-xl shadow-sm border overflow-hidden p-5">

                <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[450px]">

                    <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
                        <Image
                            src={course?.image}
                            alt={course?.title}
                            fill
                            className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                            priority
                        />
                    </div>

                    <div className="p-6 md:p-10 flex flex-col justify-center">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                            {course.category}
                        </span>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                            {course.title}
                        </h1>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <FaUserAlt className="text-primary/70" />
                                <span>{course.instructor}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MdLayers className="text-primary/70" />
                                <span>{course.level}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <FaClock className="text-primary/70" />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <FaStar className="text-yellow-500" />
                                <span className="font-bold text-gray-700">{course.rating}</span>
                            </div>
                        </div>

                        <Button className="w-[50vh]  py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg ">
                            Enroll Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsPage