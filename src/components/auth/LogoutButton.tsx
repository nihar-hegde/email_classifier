"use client";

import { Button } from "../ui/button";
import { logout } from "@/lib/actions/user.action";

export const LogoutButton = () => {
  const onClick = () => {
    logout();
  };
  return (
    <Button variant={"destructive"} onClick={onClick}>
      Logout
    </Button>
  );
};
