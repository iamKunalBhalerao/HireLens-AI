import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyze Submissions - HireLens.ai",
  description: "Analyze and evaluate video and audio candidate submissions using advanced AI insights.",
};

export default function AnalyzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
