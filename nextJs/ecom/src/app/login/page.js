"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation"

export default function LoginPage() {

    let router = useRouter()
    const [formData, setFormData] = useState({});
    console.log(formData);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })



    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/login", formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", formData.email);
            router.push("/home")

        } catch (error) {

            console.error("Login error:", error.response?.data || error.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                    <CardDescription>
                        Enter your email and password to sign in to your account.
                    </CardDescription>
                </CardHeader>

                <form
                    onSubmit={handleSubmit}
                >
                    <CardContent className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input

                                onChange={handleChange}
                                id="password"
                                name={"password"}
                                type="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </CardContent>
                </form>

                <CardFooter className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground text-center">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-foreground underline-offset-4 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}