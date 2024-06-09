import { auth } from "@/auth";
import { Navbar } from "@/components/shared/Navbar";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const UserLayout = async ({ children }: { children: ReactNode }) => {
  const user = await auth();
  if (!user) {
    return redirect("/");
  }

  return (
    <div className="flex items-center justify-between px-72 py-24 gap-2 flex-col">
      <Navbar /> {children}
    </div>
  );
};

export default UserLayout;
