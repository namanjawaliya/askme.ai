"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Login = () => {
  const router = useRouter();
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const supabase = createClient();

    const data = {
      email: "test+1@example.com",
      password: "24By7x365!",
    };

    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      console.error({ error });
      return;
    }

    router.push("/dashboard");
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    const supabase = createClient();

    const data = {
      email: "test+1@example.com",
      password: "24By7x365!",
    };

    const { error } = await supabase.auth.signUp(data);
    if (error) {
      console.error({ error });
      return;
    }

    setMode("login");
  };

  const [mode, setMode] = useState("login");

  return (
    <div className="flex flex-grow items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle> {mode === "login" ? "Login" : "Sign Up"}</CardTitle>
          <CardDescription>
            Enter your credentials to {mode === "login" ? "login" : "sign up"}
            &nbsp;to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <Button onClick={mode === "login" ? handleLogin : handleSignUp}>
              {mode === "login" ? "Login" : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm flex gap-2">
          <p>Don't have an account?</p>
          <Link
            href={"#"}
            className="underline"
            onClick={() => setMode(mode === "login" ? "sign-up" : "login")}
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
