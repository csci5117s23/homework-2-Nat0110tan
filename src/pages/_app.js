import '@/styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  
  return (
    // <div className="flex h-screen items-center justify-center">
      <ClerkProvider {...pageProps}>
        <SignedIn>
          <UserButton />
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </ClerkProvider>
    // </div>
  );
}