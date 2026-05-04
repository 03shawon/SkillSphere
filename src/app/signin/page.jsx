"use client"

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { CgGoogle } from "react-icons/cg";

const SignInPage = () => {
    const searchParams = useSearchParams();
    const callbackURL = searchParams.get("callbackURL") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: callbackURL
        });

        if (error) {
            toast.error(error.message || "Login Failed !!");
        } else {
            toast.success("Login Successful");
        }
    }

    const handleGoogle = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackURL,
        });

        if (error) {
            toast.error(error.message || "Google Login Failed");
            return;
        }
    };

    return (
        <Card className="border mx-auto w-125 py-10 mt-5 mb-5 bg-gray-100">
            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField isRequired minLength={8} name="password" type="password">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check /> Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <div className="w-96 mx-auto mt-4">
                <p className="font-bold text-center mb-2">Or</p>
                <Button onClick={handleGoogle} variant="outline" className='w-full'>
                    <CgGoogle /> Sign With Google
                </Button>
            </div>
        </Card>
    );
}

export default SignInPage;