import { Card, div } from "@heroui/react";
import { FaBookReader, FaClock, FaBrain, FaTasks } from "react-icons/fa";

const LearningTips = () => {
    const tips = [
        {
            id: 1,
            title: "Study Techniques",
            description: "Use Active Recall and Spaced Repetition to memorize effectively.",
            icon: <FaBookReader className="text-primary text-2xl" />,
            bgColor: "bg-primary/10"
        },
        {
            id: 2,
            title: "Time Management",
            description: "Follow the Pomodoro technique: 25 mins study, 5 mins break.",
            icon: <FaClock className="text-secondary text-2xl" />,
            bgColor: "bg-secondary/10"
        },
        {
            id: 3,
            title: "Deep Work",
            description: "Eliminate distractions and focus on one task for at least 60-90 minutes.",
            icon: <FaBrain className="text-success text-2xl" />,
            bgColor: "bg-success/10"
        },
        {
            id: 4,
            title: "Goal Setting",
            description: "Break down large courses into small, achievable daily tasks.",
            icon: <FaTasks className="text-warning text-2xl" />,
            bgColor: "bg-warning/10"
        }
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    Boost Your Learning 🚀
                </h2>
                <p className="text-default-500 mt-3 text-lg">
                    Simple tips to help you learn faster and stay productive.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tips.map((tip) => (
                    <Card
                        key={tip.id}
                        className="border-none shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className={`p-4 rounded-2xl ${tip.bgColor} mb-4`}>
                                {tip.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                            <p className="text-default-500 text-sm leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default LearningTips;