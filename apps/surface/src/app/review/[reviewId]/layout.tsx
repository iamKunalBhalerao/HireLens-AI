import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidate Review Detail - HireLens.ai",
  description: "Detailed evaluation, match score, behavioral analysis, and preparation plans for the candidate.",
};

export default function ReviewDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
