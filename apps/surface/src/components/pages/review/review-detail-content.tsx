"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  UserCheck,
  CalendarDays,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Sparkles,
  Clock,
  ArrowLeft,
  Search,
  BookOpen,
  CheckSquare,
  Square,
  AlertOctagon,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";
import { getReviewById } from "@/services/analyze.service";
import {
  ReviewResponse,
  TechnicalQuestion,
  BehavioralQuestion,
  SkillGap,
  PreparationPlan,
} from "@/types/analyze.api.types";
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

interface ReviewDetailContentProps {
  reviewId: string;
}

type TabType = "technical" | "behavioral" | "preparation";

export default function ReviewDetailContent({
  reviewId,
}: ReviewDetailContentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [review, setReview] = useState<ReviewResponse | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("technical");

  // Interactive component states
  const [expandedQuestion, setExpandedQuestion] = useState<
    Record<number, boolean>
  >({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchReview() {
      try {
        setLoading(true);
        setError(null);
        const response = await getReviewById(reviewId);
        if (response.success && response.data) {
          setReview(response.data);
        } else {
          setError(response.message || "Failed to fetch review data");
        }
      } catch (err: any) {
        console.error("Error fetching review:", err);
        setError("An unexpected error occurred while loading this review.");
      } finally {
        setLoading(false);
      }
    }
    fetchReview();
  }, [reviewId]);

  // Load checked tasks from localStorage (optional persistence for checklists)
  useEffect(() => {
    if (review) {
      const stored = localStorage.getItem(`tasks-${review.id}`);
      if (stored) {
        try {
          setCheckedTasks(JSON.parse(stored));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, [review]);

  const toggleTask = (dayId: number, taskIndex: number) => {
    const key = `${dayId}-${taskIndex}`;
    const updated = {
      ...checkedTasks,
      [key]: !checkedTasks[key],
    };
    setCheckedTasks(updated);
    if (review) {
      localStorage.setItem(`tasks-${review.id}`, JSON.stringify(updated));
    }
  };

  const toggleQuestionExpand = (id: number) => {
    setExpandedQuestion((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Helper score categorizations
  const getScoreDetails = (score: number) => {
    if (score >= 80) {
      return {
        label: "Excellent Fit",
        desc: "Candidate has strong alignment with minimal gaps.",
        colorClass: "text-emerald-500 dark:text-emerald-400",
        bgClass:
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        stroke: "stroke-emerald-500 dark:stroke-emerald-400",
        gradient: "from-emerald-500 to-teal-500",
      };
    } else if (score >= 60) {
      return {
        label: "Moderate Fit",
        desc: "Solid foundation with addressable development areas.",
        colorClass: "text-indigo-500 dark:text-indigo-400",
        bgClass:
          "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
        stroke: "stroke-indigo-500 dark:stroke-indigo-400",
        gradient: "from-indigo-500 to-violet-500",
      };
    } else {
      return {
        label: "Growth Required",
        desc: "Significant technical or behavioral alignment gaps.",
        colorClass: "text-amber-500 dark:text-amber-400",
        bgClass:
          "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        stroke: "stroke-amber-500 dark:stroke-amber-400",
        gradient: "from-amber-500 to-orange-500",
      };
    }
  };

  // Filtering questions
  const filteredTechnical =
    review?.technicalQuestions?.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.intention.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || [];

  const filteredBehavioral =
    review?.behavioralQuestions?.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.intention.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || [];

  // Rendering skeletons while loading
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
        <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <div className="h-8 w-1/3 bg-muted animate-pulse rounded-lg" />
            <div className="h-4 w-1/4 bg-muted animate-pulse rounded-md" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-3 space-y-3">
              <div className="h-12 w-full bg-muted animate-pulse rounded-xl" />
              <div className="h-12 w-full bg-muted animate-pulse rounded-xl" />
              <div className="h-12 w-full bg-muted animate-pulse rounded-xl" />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <div className="h-10 w-full bg-muted animate-pulse rounded-lg" />
              <div className="h-32 w-full bg-muted animate-pulse rounded-xl" />
              <div className="h-32 w-full bg-muted animate-pulse rounded-xl" />
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="h-48 w-full bg-muted animate-pulse rounded-xl" />
              <div className="h-64 w-full bg-muted animate-pulse rounded-xl" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Error state rendering
  if (error || !review) {
    return (
      <div className="relative min-h-screen w-full flex flex-col bg-background justify-center items-center p-6 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-40%] left-[-10%] h-[80%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.05),transparent_60%)] blur-3xl" />
        </div>
        <Card className="max-w-md w-full border-destructive/20 shadow-xl bg-card/60 backdrop-blur-md rounded-2xl p-6">
          <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-destructive/10 text-destructive mb-4">
            <AlertOctagon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl font-bold">
            Report Loading Error
          </CardTitle>
          <CardDescription className="mt-2 text-sm">
            {error ||
              "We could not find the requested review analysis. It may have been deleted or the access is unauthorized."}
          </CardDescription>
          <div className="mt-6 flex flex-col gap-2">
            <Button
              variant="default"
              onClick={() => router.refresh()}
              className="w-full flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="h-4 w-4" /> Try Again
            </Button>
            <Link href="/analyze" className="w-full">
              <Button variant="outline" className="w-full cursor-pointer">
                Back to Analysis
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const scoreDetails = getScoreDetails(review.matchScore);
  const formattedDate = new Date(review.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background selection:bg-primary/10">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-25%] left-[-10%] h-[60%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.07),transparent_50%)] blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.05),transparent_50%)] blur-3xl" />
      </div>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/review"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-sm font-medium">Back to Reviews</span>
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

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        {/* Title and Job Banner */}
        <div className="border-b border-border/40 pb-6 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              variant="default"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10"
            >
              AI Job Analysis
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
              <Clock className="h-3.5 w-3.5" /> Created on {formattedDate}
            </span>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl tracking-tight text-foreground mt-1">
            {review.title || "Software Development Engineer (SDE) Intern"}
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            A comprehensive, custom compatibility report analyzing your profile
            against the specified requirements.
          </p>
        </div>

        {/* 3-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Sticky Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <div className="sticky top-24 space-y-2">
              <p className="text-[11px] font-bold text-muted-foreground tracking-wider uppercase pl-2 mb-2">
                Review Sections
              </p>

              {/* Technical Questions Tab Trigger */}
              <button
                onClick={() => {
                  setActiveTab("technical");
                  setSearchQuery("");
                }}
                className={cn(
                  "relative w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all group outline-none",
                  activeTab === "technical"
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                )}
              >
                {activeTab === "technical" && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-secondary/80 border border-border/40 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
                      activeTab === "technical"
                        ? "bg-primary/5 border-primary/20 text-primary"
                        : "border-border/60 bg-muted/10 group-hover:border-muted-foreground/30",
                    )}
                  >
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-sm block">Technical Questions</span>
                    <span className="text-[10px] text-muted-foreground font-normal">
                      Core coding concepts
                    </span>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="h-5 px-1.5 font-mono font-medium rounded-md"
                >
                  {review.technicalQuestions?.length ?? 0}
                </Badge>
              </button>

              {/* Behavioral Questions Tab Trigger */}
              <button
                onClick={() => {
                  setActiveTab("behavioral");
                  setSearchQuery("");
                }}
                className={cn(
                  "relative w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all group outline-none",
                  activeTab === "behavioral"
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                )}
              >
                {activeTab === "behavioral" && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-secondary/80 border border-border/40 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
                      activeTab === "behavioral"
                        ? "bg-primary/5 border-primary/20 text-primary"
                        : "border-border/60 bg-muted/10 group-hover:border-muted-foreground/30",
                    )}
                  >
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-sm block">Behavioral Questions</span>
                    <span className="text-[10px] text-muted-foreground font-normal">
                      STAR technique alignment
                    </span>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="h-5 px-1.5 font-mono font-medium rounded-md"
                >
                  {review.behavioralQuestions?.length ?? 0}
                </Badge>
              </button>

              {/* Preparation Plan Tab Trigger */}
              <button
                onClick={() => {
                  setActiveTab("preparation");
                  setSearchQuery("");
                }}
                className={cn(
                  "relative w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all group outline-none",
                  activeTab === "preparation"
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                )}
              >
                {activeTab === "preparation" && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-secondary/80 border border-border/40 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
                      activeTab === "preparation"
                        ? "bg-primary/5 border-primary/20 text-primary"
                        : "border-border/60 bg-muted/10 group-hover:border-muted-foreground/30",
                    )}
                  >
                    <CalendarDays className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-sm block">Preparation Plan</span>
                    <span className="text-[10px] text-muted-foreground font-normal">
                      Day-by-day action map
                    </span>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="h-5 px-1.5 font-mono font-medium rounded-md"
                >
                  {review.preparationPlans?.length ?? 0}d
                </Badge>
              </button>

              <div className="pt-4 border-t border-border/40 mt-4 px-2">
                <div className="bg-card/40 border border-border/50 rounded-xl p-3.5 text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-1.5 text-foreground font-medium">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    <span>Resume Analyser</span>
                  </div>
                  <p className="leading-relaxed">
                    Compare this review detail against standard job postings to
                    understand critical developer requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Main Content Area */}
          <div className="lg:col-span-6 space-y-6">
            {/* Search filter for question tabs */}
            {activeTab !== "preparation" && (
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab} questions or intention...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/50 bg-card/40 focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all text-sm"
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* TECHNICAL QUESTIONS TAB */}
              {activeTab === "technical" && (
                <motion.div
                  key="technical"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-indigo-500" />
                      Technical Questions
                    </h2>
                    <span className="text-xs text-muted-foreground font-mono">
                      Showing {filteredTechnical.length} of{" "}
                      {review.technicalQuestions?.length ?? 0}
                    </span>
                  </div>

                  {filteredTechnical.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-border/60 rounded-2xl bg-card/30">
                      <p className="text-sm text-muted-foreground">
                        No technical questions found matching your search.
                      </p>
                    </div>
                  ) : (
                    filteredTechnical.map((q, idx) => {
                      const isOpen = !!expandedQuestion[q.id];
                      return (
                        <Card
                          key={q.id}
                          className="border border-border/50 bg-card/30 hover:bg-card/50 transition-all rounded-xl overflow-hidden"
                        >
                          <CardHeader
                            className="p-5 cursor-pointer select-none"
                            onClick={() => toggleQuestionExpand(q.id)}
                          >
                            <div className="flex justify-between items-start gap-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold font-mono">
                                {idx + 1}
                              </span>
                              <div className="flex-1 space-y-1">
                                <h3 className="font-semibold text-foreground leading-relaxed text-sm md:text-[15px]">
                                  {q.question}
                                </h3>
                              </div>
                              <div className="text-muted-foreground pt-0.5 hover:text-foreground">
                                {isOpen ? (
                                  <ChevronUp className="h-4.5 w-4.5" />
                                ) : (
                                  <ChevronDown className="h-4.5 w-4.5" />
                                )}
                              </div>
                            </div>
                          </CardHeader>

                          {isOpen && (
                            <CardContent className="p-5 pt-0 border-t border-border/40 bg-secondary/15 space-y-4">
                              <div className="pt-4 space-y-1">
                                <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground block">
                                  Why interviewer asks this:
                                </span>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                                  &ldquo;{q.intention}&rdquo;
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold tracking-wider uppercase text-foreground/80 flex items-center gap-1.5">
                                    <BookOpen className="h-3 w-3 text-indigo-500" />{" "}
                                    Ideal Candidate Answer Structure:
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(q.answer, `tech-${q.id}`)
                                    }
                                    className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline outline-none cursor-pointer"
                                  >
                                    {copiedId === `tech-${q.id}` ? (
                                      <>
                                        <Check className="h-3 w-3" /> Copied
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3 w-3" /> Copy Answer
                                      </>
                                    )}
                                  </button>
                                </div>
                                <div className="bg-background/80 border border-border/60 rounded-lg p-4 font-mono text-[11px] md:text-xs leading-relaxed text-foreground/90 whitespace-pre-wrap">
                                  {q.answer}
                                </div>
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      );
                    })
                  )}
                </motion.div>
              )}

              {/* BEHAVIORAL QUESTIONS TAB */}
              {activeTab === "behavioral" && (
                <motion.div
                  key="behavioral"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-emerald-500" />
                      Behavioral Questions
                    </h2>
                    <span className="text-xs text-muted-foreground font-mono">
                      Showing {filteredBehavioral.length} of{" "}
                      {review.behavioralQuestions?.length ?? 0}
                    </span>
                  </div>

                  {filteredBehavioral.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-border/60 rounded-2xl bg-card/30">
                      <p className="text-sm text-muted-foreground">
                        No behavioral questions found matching your search.
                      </p>
                    </div>
                  ) : (
                    filteredBehavioral.map((q, idx) => {
                      const isOpen = !!expandedQuestion[q.id];
                      return (
                        <Card
                          key={q.id}
                          className="border border-border/50 bg-card/30 hover:bg-card/50 transition-all rounded-xl overflow-hidden"
                        >
                          <CardHeader
                            className="p-5 cursor-pointer select-none"
                            onClick={() => toggleQuestionExpand(q.id)}
                          >
                            <div className="flex justify-between items-start gap-4">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                                {idx + 1}
                              </span>
                              <div className="flex-1 space-y-1">
                                <h3 className="font-semibold text-foreground leading-relaxed text-sm md:text-[15px]">
                                  {q.question}
                                </h3>
                              </div>
                              <div className="text-muted-foreground pt-0.5 hover:text-foreground">
                                {isOpen ? (
                                  <ChevronUp className="h-4.5 w-4.5" />
                                ) : (
                                  <ChevronDown className="h-4.5 w-4.5" />
                                )}
                              </div>
                            </div>
                          </CardHeader>

                          {isOpen && (
                            <CardContent className="p-5 pt-0 border-t border-border/40 bg-secondary/15 space-y-4">
                              <div className="pt-4 space-y-1">
                                <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground block">
                                  Why interviewer asks this:
                                </span>
                                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                                  &ldquo;{q.intention}&rdquo;
                                </p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold tracking-wider uppercase text-foreground/80 flex items-center gap-1.5">
                                    <BookOpen className="h-3 w-3 text-emerald-500" />{" "}
                                    Suggested STAR Response Guidance:
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(q.answer, `beh-${q.id}`)
                                    }
                                    className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:underline outline-none cursor-pointer"
                                  >
                                    {copiedId === `beh-${q.id}` ? (
                                      <>
                                        <Check className="h-3 w-3" /> Copied
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3 w-3" /> Copy Answer
                                      </>
                                    )}
                                  </button>
                                </div>
                                <div className="bg-background/80 border border-border/60 rounded-lg p-4 font-mono text-[11px] md:text-xs leading-relaxed text-foreground/90 whitespace-pre-wrap">
                                  {q.answer}
                                </div>
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      );
                    })
                  )}
                </motion.div>
              )}

              {/* PREPARATION ROADMAP TAB */}
              {activeTab === "preparation" && (
                <motion.div
                  key="preparation"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                      <CalendarDays className="h-5 w-5 text-violet-500" />
                      Day-by-Day Roadmap
                    </h2>
                    <span className="text-xs text-muted-foreground font-mono">
                      {review.preparationPlans?.length ?? 0} Days Schedule
                    </span>
                  </div>

                  <div className="space-y-4">
                    {(review.preparationPlans || []).map((plan) => {
                      const totalTasks = plan.tasks?.length ?? 0;
                      const checkedCount = (plan.tasks || []).filter(
                        (_, idx) => !!checkedTasks[`${plan.id}-${idx}`],
                      ).length;
                      const progressPercent =
                        totalTasks > 0
                          ? Math.round((checkedCount / totalTasks) * 100)
                          : 0;

                      return (
                        <Card
                          key={plan.id}
                          className="border border-border/50 bg-card/30 hover:bg-card/40 transition-all rounded-2xl overflow-hidden p-6 space-y-4"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/30 pb-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className="bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400 font-mono font-bold px-2 py-0.5"
                                >
                                  Day {plan.day}
                                </Badge>
                                <span className="text-xs text-muted-foreground font-medium">
                                  Preparation Phase
                                </span>
                              </div>
                              <h3 className="text-[16px] font-bold text-foreground mt-1">
                                {plan.focus}
                              </h3>
                            </div>
                            <div className="flex flex-col items-start sm:items-end gap-1.5">
                              <span className="text-xs font-mono font-medium text-muted-foreground">
                                Progress: {checkedCount}/{totalTasks} tasks (
                                {progressPercent}%)
                              </span>
                              <div className="h-1.5 w-32 bg-muted/60 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-violet-500 transition-all duration-300 rounded-full"
                                  style={{ width: `${progressPercent}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3.5">
                            <p className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                              Actions & Study Tasks:
                            </p>
                            <div className="space-y-2.5">
                              {(plan.tasks || []).map((task, idx) => {
                                const isChecked =
                                  !!checkedTasks[`${plan.id}-${idx}`];
                                return (
                                  <div
                                    key={idx}
                                    onClick={() => toggleTask(plan.id, idx)}
                                    className={cn(
                                      "flex items-start gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all",
                                      isChecked
                                        ? "bg-emerald-500/3 border-emerald-500/20 dark:bg-emerald-500/5 text-muted-foreground"
                                        : "bg-background/40 border-border/50 hover:bg-background/80 hover:border-muted-foreground/20 text-foreground",
                                    )}
                                  >
                                    <div className="pt-0.5 shrink-0">
                                      {isChecked ? (
                                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                                      ) : (
                                        <Square className="h-4.5 w-4.5 text-muted-foreground hover:text-foreground transition-colors" />
                                      )}
                                    </div>
                                    <span
                                      className={cn(
                                        "text-xs md:text-sm leading-relaxed",
                                        isChecked
                                          ? "line-through opacity-85"
                                          : "",
                                      )}
                                    >
                                      {task}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Metrics & Insights Panel */}
          <div className="lg:col-span-3 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Match Score Card */}
              <Card className="border border-border/50 bg-card/45 backdrop-blur-md rounded-2xl overflow-hidden shadow-md">
                <CardHeader className="pb-3 border-b border-border/30">
                  <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Compatibility Score
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                  {/* Circular SVG Progress Bar */}
                  <div className="relative h-32 w-32 flex items-center justify-center">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      {/* Background circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        className="stroke-muted/30"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Animated foreground circle */}
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="52"
                        className={scoreDetails.stroke}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 52}
                        initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                        animate={{
                          strokeDashoffset:
                            2 * Math.PI * 52 -
                            (2 * Math.PI * 52 * review.matchScore) / 100,
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute flex flex-col items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="text-3xl font-black tracking-tight text-foreground"
                      >
                        {review.matchScore}
                      </motion.span>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-0.5">
                        percent
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Badge
                      className={cn(
                        "px-2.5 py-0.5 border text-xs font-semibold rounded-full",
                        scoreDetails.bgClass,
                      )}
                    >
                      {scoreDetails.label}
                    </Badge>
                    <p className="text-xs text-muted-foreground leading-normal px-2 pt-1">
                      {scoreDetails.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Skill Gaps Card */}
              <Card className="border border-border/50 bg-card/45 backdrop-blur-md rounded-2xl overflow-hidden shadow-md">
                <CardHeader className="pb-3 border-b border-border/30">
                  <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Identified Gaps
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  {(review.skillGaps || []).length === 0 ? (
                    <div className="text-center py-6">
                      <CheckCircle2 className="h-8 w-8 text-emerald-500 mx-auto mb-2 opacity-80" />
                      <p className="text-xs text-muted-foreground">
                        No skill gaps identified. Excellent match!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {(review.skillGaps || []).map((gap) => {
                        let severityColor =
                          "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
                        if (gap.severity === "HIGH") {
                          severityColor =
                            "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
                        } else if (gap.severity === "MEDIUM") {
                          severityColor =
                            "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
                        }

                        return (
                          <div
                            key={gap.id}
                            className="p-3 border border-border/50 bg-background/40 hover:bg-background/80 transition-all rounded-xl space-y-2 group"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                {gap.skill}
                              </span>
                              <Badge
                                className={cn(
                                  "text-[9px] px-1.5 py-0 rounded-md border shrink-0 font-bold",
                                  severityColor,
                                )}
                              >
                                {gap.severity}
                              </Badge>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
