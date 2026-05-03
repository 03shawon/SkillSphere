import TopInstructorCard from "./TopInstructorCard"

const TopInstructor = async () => {
    const res = await fetch('https://skillsphere-psi-two.vercel.app/instructor.json')
    const data = await res.json()
    const instructors = data.slice(0, 3)
    // console.log(instructors)

    return (
        <div className="py-12 max-w-7xl mx-auto px-4">
            <h2 className="font-bold text-3xl text-center mb-10">Top Instructors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                {instructors.map(instructor => (
                    <TopInstructorCard key={instructor.id} instructor={instructor} />
                ))}
            </div>
        </div>
    )
}

export default TopInstructor