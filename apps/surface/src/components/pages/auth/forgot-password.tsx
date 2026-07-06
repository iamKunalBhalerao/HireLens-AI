"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Loader2,
  ArrowLeft,
  Mail,
  Lock,
  CheckCircle2,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { Logo } from "@/components/logo";

type Step = "email" | "code" | "reset" | "success";

export default function ForgotPassword() {
  const router = useRouter();

  // Component statesz
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState<string[]>(Array(6).fill(""));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Refs for 6-digit OTP inputs
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Auto-focus first OTP input when arriving at the code step
  useEffect(() => {
    if (step === "code") {
      setTimeout(() => {
        otpRefs.current[0]?.focus();
      }, 100);
    }
  }, [step]);

  // Handle Email Submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setStep("code");
  };

  // Handle OTP Inputs
  const handleOtpChange = (value: string, index: number) => {
    setError("");
    const newOtp = [...otpCode];

    // Take only the last character entered
    const char = value.slice(-1);
    newOtp[index] = char;
    setOtpCode(newOtp);

    // Auto-focus next input if a value was typed
    if (char && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      setError("");
      // If current input is empty, clear previous input and focus it
      if (!otpCode[index] && index > 0) {
        const newOtp = [...otpCode];
        newOtp[index - 1] = "";
        setOtpCode(newOtp);
        otpRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otpCode];
        newOtp[index] = "";
        setOtpCode(newOtp);
      }
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError("");
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d{1,6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      const newOtp = [...otpCode];

      for (let i = 0; i < 6; i++) {
        newOtp[i] = digits[i] || "";
      }

      setOtpCode(newOtp);

      // Focus the appropriate input
      const nextFocusIndex = Math.min(digits.length, 5);
      otpRefs.current[nextFocusIndex]?.focus();
    }
  };

  // Handle OTP Verification
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const fullCode = otpCode.join("");

    if (fullCode.length < 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    if (fullCode === "123456") {
      setStep("reset");
    } else {
      setError("Invalid verification code. Please try 123456.");
    }
  };

  // Handle Password Reset
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setLoading(false);
    setStep("success");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-background text-foreground">
      <div className="flex h-full w-full p-4">
        {/* Left container: Form Content */}
        <div className="m-auto flex w-full max-w-sm flex-col items-center justify-center px-4">
          <Logo className="h-9 w-9 transition-transform duration-300 hover:scale-105" />

          <AnimatePresence mode="wait">
            {/* STEP 1: EMAIL INPUT */}
            {step === "email" && (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full mt-6"
              >
                <div className="text-center mb-6">
                  <h1 className="font-semibold text-2xl tracking-tight">
                    Forgot Password?
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Enter your email address and we&apos;ll send you a 6-digit
                    code to reset your password.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-1 duration-200">
                      {error}
                    </div>
                  )}

                  <Field data-invalid={!!error}>
                    <FieldLabel className="text-sm font-medium">
                      Email Address
                    </FieldLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        className="pl-10 w-full"
                        disabled={loading}
                        required
                        autoFocus
                      />
                    </div>
                  </Field>

                  <Button
                    type="submit"
                    className="w-full mt-4 font-medium"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    {loading ? "Sending link..." : "Send Reset Code"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href="/auth/signin"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-4"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to sign in
                  </Link>
                </div>
              </motion.div>
            )}

            {/* STEP 2: 6-DIGIT CODE */}
            {step === "code" && (
              <motion.div
                key="code-step"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full mt-6"
              >
                <div className="text-center mb-6">
                  <h1 className="font-semibold text-2xl tracking-tight">
                    Verify Your Email
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We sent a 6-digit verification code to{" "}
                    <span className="font-medium text-foreground">{email}</span>
                    .
                  </p>
                </div>

                <form onSubmit={handleOtpSubmit} className="space-y-6">
                  {error && (
                    <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-1 duration-200">
                      {error}
                    </div>
                  )}

                  <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-start gap-2.5 text-xs text-muted-foreground mb-4">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">
                        Demo Instruction:{" "}
                      </span>
                      Please enter the code{" "}
                      <strong className="text-primary font-bold">123456</strong>{" "}
                      to proceed.
                    </div>
                  </div>

                  <Field>
                    <FieldLabel className="text-sm font-medium text-center block w-full mb-3">
                      Verification Code
                    </FieldLabel>
                    <div className="flex justify-between gap-2 max-w-[280px] mx-auto">
                      {otpCode.map((digit, index) => (
                        <input
                          key={index}
                          ref={(el) => {
                            otpRefs.current[index] = el;
                          }}
                          type="text"
                          maxLength={1}
                          pattern="\d*"
                          inputMode="numeric"
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(e.target.value, index)
                          }
                          onKeyDown={(e) => handleOtpKeyDown(e, index)}
                          onPaste={handleOtpPaste}
                          className="w-10 h-12 text-center text-xl font-bold border border-input rounded-lg bg-background shadow-xs transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/25 outline-hidden"
                          disabled={loading}
                        />
                      ))}
                    </div>
                  </Field>

                  <div className="space-y-3">
                    <Button
                      type="submit"
                      className="w-full font-medium"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : null}
                      {loading ? "Verifying..." : "Verify & Continue"}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full font-medium"
                      onClick={() => {
                        setOtpCode(Array(6).fill(""));
                        setStep("email");
                        setError("");
                      }}
                      disabled={loading}
                    >
                      Change Email
                    </Button>
                  </div>
                </form>

                <div className="mt-6 text-center text-xs text-muted-foreground">
                  Didn&apos;t receive the code?{" "}
                  <button
                    onClick={async () => {
                      setLoading(true);
                      await new Promise((resolve) => setTimeout(resolve, 800));
                      setLoading(false);
                      setOtpCode(Array(6).fill(""));
                      setError("");
                      alert("Code resent successfully! Use 123456.");
                    }}
                    className="underline text-foreground hover:text-primary transition-colors cursor-pointer"
                    disabled={loading}
                  >
                    Resend Code
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: RESET PASSWORD */}
            {step === "reset" && (
              <motion.div
                key="reset-step"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full mt-6"
              >
                <div className="text-center mb-6">
                  <h1 className="font-semibold text-2xl tracking-tight">
                    Create New Password
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please choose a strong password that you haven&apos;t used
                    before.
                  </p>
                </div>

                <form onSubmit={handleResetSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-top-1 duration-200">
                      {error}
                    </div>
                  )}

                  <Field data-invalid={!!error}>
                    <FieldLabel className="text-sm font-medium">
                      New Password
                    </FieldLabel>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (error) setError("");
                        }}
                        className="pl-10 w-full"
                        disabled={loading}
                        required
                        autoFocus
                      />
                    </div>
                    <FieldDescription className="text-xs text-muted-foreground mt-1">
                      Must be at least 8 characters long.
                    </FieldDescription>
                  </Field>

                  <Field data-invalid={!!error}>
                    <FieldLabel className="text-sm font-medium">
                      Confirm New Password
                    </FieldLabel>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (error) setError("");
                        }}
                        className="pl-10 w-full"
                        disabled={loading}
                        required
                      />
                    </div>
                  </Field>

                  <Button
                    type="submit"
                    className="w-full mt-4 font-medium"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    {loading ? "Updating password..." : "Reset Password"}
                  </Button>
                </form>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS SCREEN */}
            {step === "success" && (
              <motion.div
                key="success-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full mt-6 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-green-100 dark:bg-green-950/30 p-3 text-green-600 dark:text-green-400 animate-bounce">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                </div>

                <h1 className="font-semibold text-2xl tracking-tight">
                  Password Reset Complete
                </h1>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Your password has been successfully updated. You can now use
                  your new password to sign into HireLens-AI.
                </p>

                <Button
                  onClick={() => router.push("/auth/signin")}
                  className="w-full mt-8 font-medium"
                >
                  Back to Sign In
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right container: Premium Hero Graphic Panel */}
        <div className="relative hidden max-w-xl grow lg:block overflow-hidden rounded-xl bg-muted/20">
          <img
            alt="HireLens-AI Forgot Password visual graphic"
            className="absolute inset-0 size-full rounded-xl object-cover transition duration-700 hover:scale-103 hover:ease-in-out"
            src="/images/login.jpeg"
          />
          {/* Glassmorphic overlay for a highly premium layout */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent flex flex-col justify-end p-8">
            <div className="backdrop-blur-md bg-background/30 dark:bg-background/20 border border-white/10 dark:border-white/5 p-6 rounded-lg text-white max-w-md shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white mb-3">
                Secure Account Recovery
              </span>
              <h2 className="text-xl font-bold text-white mb-2 leading-snug">
                Protecting your professional intelligence workspace
              </h2>
              <p className="text-xs text-white/80 leading-normal">
                HireLens-AI utilizes secure authentication layers to guard your
                talent tracking systems and recruitment metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
