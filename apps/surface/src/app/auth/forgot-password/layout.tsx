import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - HireLens.ai",
  description: "Recover your HireLens.ai account password.",
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
