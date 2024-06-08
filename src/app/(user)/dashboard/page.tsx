import { auth } from "@/auth";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Button } from "@/components/ui/button";
import { DataCard } from "@/components/user/DataCard";
import EmailList from "@/components/user/EmailList";
import { NumberSelector } from "@/components/user/NumberSelector";
import { UserCard } from "@/components/user/UserCard";
import { logout } from "@/lib/actions/user.action";
import React from "react";

const UserPage = async () => {
  const user = await auth();
  const onClickHandler = async () => {
    await logout();
  };
  return (
    <main className="flex flex-col items-center gap-5 px-72 py-24">
      <div className="flex items-center justify-between w-full">
        <div>{!user ? <div>User Data Not Found</div> : <UserCard />}</div>
        <div>
          <LogoutButton />
        </div>
      </div>
      <div className="w-full flex items-center ">
        <DataCard />
      </div>
      <div>
        <EmailList />
      </div>
    </main>
  );
};

export default UserPage;
