import SearchCourses from "@/components/SearchCourses"

const AllCoursesPage = async () => {
    const res = await fetch('https://skillsphere-psi-two.vercel.app/courses.json')
    const allCourses = await res.json()

    return (
        <div className="py-5 max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold my-8 text-center">All Courses</h1>

            <div className="mt-5">
                <SearchCourses courses={allCourses}></SearchCourses>
            </div>
        </div>
    )
}

export default AllCoursesPage