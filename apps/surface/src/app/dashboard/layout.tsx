import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - HireLens.ai",
  description: "View your hiring analytics, active interviews, candidate status, and overall recruitment pipeline.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
