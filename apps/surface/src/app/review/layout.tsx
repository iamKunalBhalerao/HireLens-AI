import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review Submissions - HireLens.ai",
  description: "Review all candidate submissions, watch video interviews, and listen to audio recordings.",
};

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
