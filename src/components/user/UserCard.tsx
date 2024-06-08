import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";

export const UserCard = async () => {
  const user = await auth();
  const userData = user?.user;
  if (!userData) {
    return (
      <div className="flex items-center justify-center p-24">
        User Not Found
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar>
        <AvatarImage src={userData?.image!} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col  justify-center">
        <p className="text-lg font-semibold">{userData.name}</p>
        <p>{userData.email}</p>
      </div>
    </div>
  );
};
