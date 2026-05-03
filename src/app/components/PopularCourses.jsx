import TopCoursesCard from './TopCoursesCard';

const PopularCourses = async () => {
    const res = await fetch('https://skillsphere-psi-two.vercel.app/courses.json')
    const data = await res.json()
    const topCourses = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
    // console.log(topCourses)
    return (
        <div className='py-5 max-w-7xl mx-auto px-4'>
            <h1 className="text-2xl font-bold my-5 text-center">Popular Courses</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {topCourses.map(course => <TopCoursesCard key={course.id} course={course}></TopCoursesCard>)}
            </div>
        </div>
    )
}

export default PopularCourses