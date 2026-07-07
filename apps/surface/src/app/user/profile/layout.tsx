import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile - HireLens.ai",
  description: "Manage your profile details, password, and account preferences on HireLens.ai.",
};

export default function UserProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
