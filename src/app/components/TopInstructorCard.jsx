import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { PiStudent } from "react-icons/pi";

const TopInstructorCard = ({ instructor }) => {
    if (!instructor) return null;

    return (
        <Card className="border border-default-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 bg-background">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-default-100">
                <Image
                    src={instructor.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={instructor.name}
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="mt-4 text-center">
                <h2 className="font-bold text-xl leading-tight text-foreground">
                    {instructor.name}
                </h2>
                <p className="text-primary text-xs font-bold mt-1 uppercase tracking-widest">
                    {instructor.role}
                </p>
            </div>

            <div className="flex justify-center my-4">
                <div className="py-1 px-4 bg-default-100 rounded-full border border-default-200">
                    <span className="text-xs font-semibold text-default-600">
                        Students: {instructor.total_students}
                    </span>
                </div>
            </div>

            <div className="mt-auto">
                <Link href={`/`} className="block w-full">
                    <Button
                        variant="solid"
                        color="primary"
                        className="w-full font-bold rounded-xl shadow-lg shadow-primary/20"
                    >
                        View Profile
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default TopInstructorCard;