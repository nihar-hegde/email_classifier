import { auth } from "@/auth";
import React from "react";
import { LogoutButton } from "../auth/LogoutButton";
import { UserCard } from "../user/UserCard";

export const Navbar = async () => {
  const user = await auth();
  return (
    <div className="flex items-center justify-between w-full">
      <div>{!user ? <div>User Data Not Found</div> : <UserCard />}</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};
