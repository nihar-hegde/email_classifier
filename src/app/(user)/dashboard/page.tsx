import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Button } from "@/components/ui/button";
import { UserCard } from "@/components/user/UserCard";
import { logout } from "@/lib/actions/user.action";
import React from "react";

const UserPage = async () => {
  const user = await auth();
  const onClickHandler = async () => {
    await logout();
  };
  return (
    <main className="flex items-center justify-between px-72 py-24">
      <div>{!user ? <div>User Data Not Found</div> : <UserCard />}</div>
      <div>
        <LogoutButton />
      </div>
    </main>
  );
};

export default UserPage;
