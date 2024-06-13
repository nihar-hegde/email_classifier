import { SignInButton } from "@/components/auth/SignInButton";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div>
        <p className="text-5xl font-bold">Welcome</p>
      </div>
      <div>
        <Link href={"/dashboard"} className={buttonVariants()}>
          Dashboard
        </Link>
      </div>
      <div>
        <SignInButton />
      </div>
    </main>
  );
}
