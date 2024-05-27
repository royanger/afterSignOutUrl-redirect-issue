import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCollapsed = false;
  return (
    <ClerkProvider signInFallbackRedirectUrl={"/dashboard"}>
      <html lang="en">
        <body>
          <header>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/">Home Page</Link>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton showName={!isCollapsed} afterSignOutUrl={"/"} />
              <SignOutButton signOutOptions={{ redirectUrl: "/" }} />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
