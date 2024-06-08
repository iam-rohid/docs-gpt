import { auth } from "@/libs/auth";
import Home from "./home-page";
import { RedirectType, redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (session) {
    redirect("/teams/new", RedirectType.replace);
  }

  return <Home />;
}
