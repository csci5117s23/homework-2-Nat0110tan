import '@/styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import {useRouter} from 'next/router';
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <div>
        <ClerkProvider {...pageProps}>
            <Component {...pageProps} key={router.asPath} />
        </ClerkProvider>
      </div>
    </div>
  );
}