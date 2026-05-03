import TopCoursesCard from "../../components/TopCoursesCard"

const AllCoursesPage = async () => {
    const res = await fetch('https://skillsphere-psi-two.vercel.app/courses.json')
    const allCourses = await res.json()
    // console.log(allCourses)
    return (
        <div className='py-12 max-w-7xl mx-auto px-4'>
            <h1 className="text-2xl font-bold my-5 text-center">All Courses</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {allCourses.map(course => <TopCoursesCard key={course.id} course={course}></TopCoursesCard>)}
            </div>
        </div>
    )
}

export default AllCoursesPage