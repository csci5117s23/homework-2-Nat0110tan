
import {useEffect } from "react";
import { SignedIn, SignedOut, SignInButton, useAuth} from "@clerk/nextjs";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function signin() {
      if (userId) {
        router.push("/todos");
      }
    }
    signin();
  }, [userId]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-16 grid-cols-fluid">
        <Head>
          <title>Welcome!</title>
        </Head>
        <div>
          <main>
            <h1>Welcome to the todo app!</h1>
            <br></br>
            <br></br>
            <h2>Wanna make your todo list? please signin!</h2>
            <SignedOut>
              <SignInButton
                className="text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                redirectUrl="/todos"
              />
            </SignedOut>
          </main>
        </div>
      </div>
    </main>
  );
}
