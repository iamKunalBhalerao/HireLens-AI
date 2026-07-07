import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - HireLens.ai",
  description: "Sign in to your HireLens.ai account to manage interviews, candidates, and job submissions.",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
