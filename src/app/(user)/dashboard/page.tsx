import { DataCard } from "@/components/user/DataCard";
import EmailList from "@/components/user/EmailList";
import { getemails } from "@/lib/actions/user.action";
import React from "react";

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

const UserPage = async ({ searchParams }: SearchParamsProps) => {
  const pageNumber =
    typeof searchParams.pageSize === "string"
      ? Number(searchParams.pageSize)
      : 10;
  console.log(pageNumber);

  const emails = await getemails({
    pageSize: pageNumber,
  });
  if (!emails) {
    return <div>No emails found</div>;
  }
  console.log(emails)
  return (
    <main className="flex flex-col items-center gap-5 w-full">
      <div className="w-full flex items-center ">
        <DataCard pageNumber={pageNumber} />
      </div>
      <div className="w-full">
        <EmailList emails={emails} />
      </div>
    </main>
  );
};

export default UserPage;
