import ReviewDetailContent from "@/components/pages/review/review-detail-content";

interface PageProps {
  params: Promise<{ reviewId: string }>;
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ReviewDetailContent reviewId={resolvedParams.reviewId} />;
}
