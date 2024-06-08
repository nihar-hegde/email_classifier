"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  const onClickHandler = async () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div>
      <Button onClick={onClickHandler}>Login With Google</Button>
    </div>
  );
};
