import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/libs/auth";
import Link from "next/link";
import { ReactNode } from "react";

export default async function LandingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <>
      <header>
        <nav>
          <Link href="/home">DocsGPT</Link>
          {session ? (
            <Button type="submit">
              <Link href="/">Dashboard</Link>
            </Button>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <Button type="submit">Log In</Button>
            </form>
          )}
        </nav>
      </header>
      {children}
    </>
  );
}
