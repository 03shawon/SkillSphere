import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-blue-500/5 blur-[100px] rounded-full -z-10" />

            <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-t from-transparent to-primary/10 bg-clip-text text-transparent select-none tracking-tighter">
                404
            </h1>

            <div className="mt-[-60px] md:mt-[-80px] z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                    404 Page not found !!
                </h2>
                <p className="text-default-500 mt-4 max-w-md mx-auto text-lg leading-relaxed font-medium">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
            </div>

            <div className="mt-10 z-10">
                <Link href="/">
                    <Button
                        color="primary"
                        variant="shadow"
                        size="lg"
                        className="font-bold px-10 h-14 rounded-2xl text-base shadow-primary/20 hover:scale-105 transition-transform duration-300"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>

            <div className="absolute bottom-10 w-full flex justify-center opacity-30">
                <div className="h-[1px] w-20 bg-default-300" />
            </div>
        </div>
    );
};

export default NotFound;