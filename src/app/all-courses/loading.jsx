import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Spinner size="lg" label="Loading Courses..." color="primary" />
        </div>
    );
}