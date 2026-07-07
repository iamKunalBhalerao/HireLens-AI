import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - HireLens.ai",
  description: "Create your HireLens.ai account to start screening talent and streamlining your hiring process.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
