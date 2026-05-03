import { Button, Card, } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const TopCoursesCard = ({ course }) => {
  if (!course) return null;

  return (
    <Card className="border border-default-200 rounded-2xl p-3 bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300 container mx-auto">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl">
        <Image
          src={course.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={course.title}
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/70 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-danger font-bold text-xs shadow-sm">
          <FaHeart size={10} />
          <span>{course.rating}</span>
        </div>
      </div>

      <div className="mt-4 px-1">
        <h2 className="font-bold text-lg leading-tight line-clamp-1 text-foreground">
          {course.title}
        </h2>
        <p className="text-default-500 text-sm mt-1">
          {course.instructor}
        </p>
      </div>

      <div className="flex items-center gap-3 my-4 px-1 h-4">
        <div className="flex items-center gap-1.5 text-default-600">
          <span className="text-xs font-semibold">Rating: {course.rating}</span>
        </div>

      </div>

      <div className="mt-auto">
        <Link href={`/all-courses/${course.id}`} className="block w-full">
          <Button
            variant="solid"
            color="primary"
            className="w-full font-bold rounded-xl shadow-lg shadow-primary/20"
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default TopCoursesCard;