"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Sparkles,
  Clock,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  AlertTriangle,
  Trash2,
  Calendar,
  Layers,
  ArrowUpDown,
  Loader2,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { getAllReviews, deleteReviewById } from "@/services/analyze.service";
import { ReviewResponse } from "@/types/analyze.api.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

type SortOption = "newest" | "oldest" | "highest" | "lowest";

export default function ReviewAllPageContent() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<ReviewResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        setError(null);
        const res = await getAllReviews();
        if (res.success && Array.isArray(res.data)) {
          setReviews(res.data);
        } else {
          setError(res.message || "Failed to load past evaluations");
        }
      } catch (err: any) {
        console.error("Error loading reviews:", err);
        setError("Unable to retrieve past reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const handleDelete = async (reviewId: string) => {
    try {
      setDeleting(true);
      const res = await deleteReviewById(reviewId);
      if (res.success) {
        setReviews((prev) => prev.filter((r) => r.id !== reviewId));
        setDeleteConfirmId(null);
      } else {
        alert(res.message || "Failed to delete review");
      }
    } catch (err) {
      console.error("Delete review error:", err);
      alert("Something went wrong during deletion");
    } finally {
      setDeleting(false);
    }
  };

  const getScoreDetails = (score: number) => {
    if (score >= 80) {
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    } else if (score >= 60) {
      return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20";
    } else {
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    }
  };

  // Filter & Sort logic
  const filteredReviews = reviews
    .filter((r) => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "newest") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      if (sortBy === "oldest") {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
      if (sortBy === "highest") {
        return b.matchScore - a.matchScore;
      }
      if (sortBy === "lowest") {
        return a.matchScore - b.matchScore;
      }
      return 0;
    });

  // Loading Skeletons
  if (loading) {
    return (
      <div className="relative min-h-screen w-full flex flex-col bg-background">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-40%] left-[-10%] h-[80%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.05),transparent_60%)] blur-3xl" />
        </div>
        <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="h-8 w-24 bg-muted animate-pulse rounded-lg" />
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-muted animate-pulse rounded-full" />
              <div className="h-4 w-20 bg-muted animate-pulse rounded-md" />
            </div>
            <div className="w-24"></div>
          </div>
        </header>
        <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <div className="h-8 w-1/3 bg-muted animate-pulse rounded-lg" />
            <div className="h-4 w-1/2 bg-muted animate-pulse rounded-md" />
          </div>
          <div className="h-10 w-full bg-muted animate-pulse rounded-xl" />
          <div className="space-y-4">
            <div className="h-24 w-full bg-muted animate-pulse rounded-xl" />
            <div className="h-24 w-full bg-muted animate-pulse rounded-xl" />
            <div className="h-24 w-full bg-muted animate-pulse rounded-xl" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background selection:bg-primary/10">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-10%] h-[70%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.06),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.04),transparent_60%)] blur-3xl" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5 text-foreground" />
            <span className="font-semibold tracking-tight text-sm">
              HireLens AI
            </span>
          </div>
          <div className="w-24 flex justify-end">
            <Link href="/analyze">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs gap-1.5 cursor-pointer"
              >
                <Sparkles className="h-3 w-3" /> New
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8 space-y-8">
        {/* Title Banner */}
        <div className="border-b border-border/40 pb-6 space-y-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10"
            >
              Evaluations Log
            </Badge>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl tracking-tight text-foreground mt-1">
            Your Job Reviews
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Manage, filter, and access all your past compatibility reports and
            study roadmaps.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search past evaluations by job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-card/40 focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all text-sm"
            />
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium whitespace-nowrap">
              <ArrowUpDown className="h-3.5 w-3.5" /> Sort by
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-border/50 rounded-xl px-3 py-2 text-xs bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              <option value="newest">Latest Analyzed</option>
              <option value="oldest">Oldest Analyzed</option>
              <option value="highest">Highest Score</option>
              <option value="lowest">Lowest Score</option>
            </select>
          </div>
        </div>

        {/* Display Error Message */}
        {error && (
          <Card className="border-destructive/20 bg-destructive/5 text-destructive p-5 rounded-2xl flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium">{error}</span>
          </Card>
        )}

        {/* Review List */}
        {!error && (
          <div className="space-y-4">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-border/60 rounded-3xl bg-card/25 backdrop-blur-xs space-y-4 flex flex-col items-center">
                <div className="h-12 w-12 rounded-2xl bg-muted/60 flex items-center justify-center text-muted-foreground">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-[15px]">
                    No Job Reviews Found
                  </h3>
                  <p className="text-xs text-muted-foreground max-w-sm">
                    {searchQuery
                      ? "Try refiltering your search or check for typos."
                      : "You haven't run any resume evaluations yet. Paste a job post to get started!"}
                  </p>
                </div>
                {!searchQuery && (
                  <Link href="/analyze">
                    <Button
                      variant="default"
                      className="mt-2 text-xs gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="h-3.5 w-3.5" /> Analyze First Job
                    </Button>
                  </Link>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase pl-1">
                  Analyses logs ({filteredReviews.length})
                </p>

                <div className="space-y-3">
                  {filteredReviews.map((review) => {
                    const formattedDate = new Date(
                      review.createdAt,
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });

                    const isDeletingConfirm = deleteConfirmId === review.id;

                    return (
                      <Card
                        key={review.id}
                        className={cn(
                          "relative border border-border/50 bg-card/30 hover:bg-card/50 transition-all rounded-2xl overflow-hidden group/card shadow-xs",
                          isDeletingConfirm
                            ? "border-destructive/30 bg-destructive/2 dark:bg-destructive/3"
                            : "",
                        )}
                      >
                        {/* Overlay confirm delete state */}
                        {isDeletingConfirm ? (
                          <div className="p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-destructive/5 animate-in fade-in duration-200">
                            <div className="flex items-center gap-3">
                              <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
                              <div>
                                <p className="text-sm font-semibold text-foreground">
                                  Delete this evaluation?
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  This will permanently remove the score and
                                  roadmap report.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <Button
                                size="sm"
                                variant="destructive"
                                disabled={deleting}
                                onClick={() => handleDelete(review.id)}
                                className="h-8 text-xs cursor-pointer"
                              >
                                {deleting ? (
                                  <Loader2 className="h-3 w-3 animate-spin" />
                                ) : (
                                  "Delete"
                                )}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={deleting}
                                onClick={() => setDeleteConfirmId(null)}
                                className="h-8 text-xs cursor-pointer"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            {/* Left details */}
                            <Link
                              href={`/review/${review.id}`}
                              className="flex-1 flex items-start gap-4 cursor-pointer outline-none"
                            >
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div className="space-y-1.5 pr-2">
                                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug group-hover/card:text-primary transition-colors">
                                  {review.title ||
                                    "Software Development Engineer (SDE) Intern"}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5 text-muted-foreground/80" />{" "}
                                    {formattedDate}
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Layers className="h-3.5 w-3.5 text-muted-foreground/80" />{" "}
                                    {review.technicalQuestions?.length ?? 0}{" "}
                                    Tech &bull;{" "}
                                    {review.behavioralQuestions?.length ?? 0}{" "}
                                    Behav.
                                  </span>
                                </div>
                              </div>
                            </Link>

                            {/* Right Score and Action */}
                            <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-border/30 pt-3 sm:pt-0 shrink-0">
                              {/* Match Score Badge */}
                              <Link
                                href={`/review/${review.id}`}
                                className="cursor-pointer outline-none"
                              >
                                <Badge
                                  className={cn(
                                    "text-xs font-bold font-mono px-3 py-1 rounded-full border shadow-2xs",
                                    getScoreDetails(review.matchScore),
                                  )}
                                >
                                  {review.matchScore}% Match
                                </Badge>
                              </Link>

                              {/* Action Buttons */}
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setDeleteConfirmId(review.id)}
                                  className="h-8 w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors border border-transparent hover:border-destructive/10 cursor-pointer outline-none"
                                  title="Delete Review"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>

                                <Link
                                  href={`/review/${review.id}`}
                                  className="outline-none"
                                >
                                  <div className="h-8 w-8 rounded-lg bg-secondary/80 flex items-center justify-center text-foreground border border-border/50 group-hover/card:bg-primary group-hover/card:text-primary-foreground group-hover/card:border-primary transition-all duration-300">
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/card:translate-x-0.5" />
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
