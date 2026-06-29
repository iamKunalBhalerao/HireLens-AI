"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Upload,
  FileText,
  CheckCircle2,
  X,
  Sparkles,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Logo } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import useAnalyze from "@/hooks/analyze.hook";
import { useRouter } from "next/navigation";

export default function AnalyzePageContent() {
  const router = useRouter();
  const { loading, handleAnalyze } = useAnalyze();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<{
    jobDescription?: string;
    selfDescription?: string;
    file?: string;
  }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    const extension = selectedFile.name.split(".").pop()?.toLowerCase();
    const isValidExtension = ["pdf", "doc", "docx", "txt"].includes(
      extension || "",
    );

    if (!validTypes.includes(selectedFile.type) && !isValidExtension) {
      setErrors((prev) => ({
        ...prev,
        file: "Please upload a valid file format (PDF, DOC, DOCX, TXT)",
      }));
      setFile(null);
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        file: "File size exceeds 5MB limit",
      }));
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setErrors((prev) => ({ ...prev, file: undefined }));
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!jobDescription.trim()) {
      newErrors.jobDescription = "Job description is required";
    }
    if (!selfDescription.trim()) {
      newErrors.selfDescription = "Self description is required";
    }
    if (!file) {
      newErrors.file = "Resume is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await handleAnalyze({
        jobDescription,
        selfDescription,
        resume: file!,
      });
      if (response.success) {
        router.push(`review/${response.data.id}`)
      } else {
        console.error("Analysis failed:", response.message);
      }
    } catch (error) {
      console.error("Error during analysis:", error);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background selection:bg-primary/10">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-40%] left-[-10%] h-[80%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.08),transparent_60%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.05),transparent_60%)]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[70%] w-[50%] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_60%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.04),transparent_60%)]" />
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
          <div className="w-24"></div> {/* Spacer for alignment symmetry */}
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          <Card className="border border-border/50 bg-card/50 backdrop-blur-xs shadow-xl rounded-2xl overflow-visible">
            <CardHeader className="text-center pb-6 border-b border-border/40">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight md:text-3xl text-foreground">
                Analyze Job Compatibility
              </CardTitle>
              <CardDescription className="max-w-md mx-auto text-sm md:text-base mt-2">
                Paste the details and upload your resume to discover alignment
                scores and customized interview strategies.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Textarea Inputs Side-by-Side (Stacked on Mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Job Description Textarea */}
                  <Field data-invalid={!!errors.jobDescription}>
                    <div className="flex justify-between items-baseline mb-2">
                      <FieldLabel htmlFor="job-description">
                        Job Description
                      </FieldLabel>
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {getWordCount(jobDescription)} words
                      </span>
                    </div>
                    <Textarea
                      id="job-description"
                      placeholder="Paste the job description or role requirements here..."
                      value={jobDescription}
                      onChange={(e) => {
                        setJobDescription(e.target.value);
                        if (errors.jobDescription) {
                          setErrors((prev) => ({
                            ...prev,
                            jobDescription: undefined,
                          }));
                        }
                      }}
                      className={cn(
                        "h-48 resize-none bg-background/50 focus:bg-background transition-all duration-200",
                        errors.jobDescription
                          ? "border-destructive/50 focus-visible:ring-destructive/20"
                          : "",
                      )}
                    />
                    <FieldError errors={[{ message: errors.jobDescription }]} />
                  </Field>

                  {/* Self Description Textarea */}
                  <Field data-invalid={!!errors.selfDescription}>
                    <div className="flex justify-between items-baseline mb-2">
                      <FieldLabel htmlFor="self-description">
                        Self Description / Bio
                      </FieldLabel>
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {getWordCount(selfDescription)} words
                      </span>
                    </div>
                    <Textarea
                      id="self-description"
                      placeholder="Share a brief self description, key accomplishments, or what you are looking for..."
                      value={selfDescription}
                      onChange={(e) => {
                        setSelfDescription(e.target.value);
                        if (errors.selfDescription) {
                          setErrors((prev) => ({
                            ...prev,
                            selfDescription: undefined,
                          }));
                        }
                      }}
                      className={cn(
                        "h-48 resize-none bg-background/50 focus:bg-background transition-all duration-200",
                        errors.selfDescription
                          ? "border-destructive/50 focus-visible:ring-destructive/20"
                          : "",
                      )}
                    />
                    <FieldError
                      errors={[{ message: errors.selfDescription }]}
                    />
                  </Field>
                </div>

                {/* Resume Upload - Full Width */}
                <Field data-invalid={!!errors.file}>
                  <FieldLabel className="mb-2">Upload Resume</FieldLabel>
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-300 group",
                      dragActive
                        ? "border-primary bg-primary/5 scale-[1.005] shadow-lg shadow-primary/5"
                        : "border-border hover:border-muted-foreground/30 hover:bg-muted/10",
                      file
                        ? "border-solid border-primary/30 bg-primary/2 dark:bg-primary/5"
                        : "",
                      errors.file
                        ? "border-destructive/40 bg-destructive/2 dark:bg-destructive/5"
                        : "",
                    )}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {file ? (
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-in zoom-in-50 duration-200">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground max-w-xs truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-500">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Ready
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFile();
                            }}
                            className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 shadow-xs text-muted-foreground transition-colors group-hover:text-foreground group-hover:bg-background">
                          <Upload className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Drag & drop your resume here, or{" "}
                            <span className="text-primary font-semibold hover:underline">
                              browse files
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1.5">
                            Supports PDF, DOC, DOCX, TXT (Max 5MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <FieldError errors={[{ message: errors.file }]} />
                </Field>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className={cn(
                      "relative w-full overflow-hidden rounded-xl bg-primary py-6 text-base font-semibold shadow-md transition-all duration-300 hover:scale-[1.005] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.995] disabled:pointer-events-none disabled:opacity-50 cursor-pointer h-12",
                    )}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Analyzing Job Alignment...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary-foreground/90" />
                        <span>Analyze Job</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
