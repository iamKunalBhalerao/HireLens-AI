"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useAuth } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SignOutDialog from "@/components/logout-dialog";
import {
  ArrowLeft,
  Calendar,
  LogOut,
  Mail,
  ShieldCheck,
  User,
  Sparkles,
} from "lucide-react";

export default function ProfileContent() {
  const { user } = useAuthStore();
  const { handleSignOut } = useAuth();
  const router = useRouter();
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background text-muted-foreground text-sm">
        Loading profile...
      </div>
    );
  }

  const handleSignOutConfirm = async () => {
    setShowSignOutDialog(false);
    await handleSignOut();
    router.push("/");
    router.refresh();
  };

  // Extract initials for dummy avatar fallback
  const initials = user.userName
    ? user.userName.substring(0, 2).toUpperCase()
    : "US";

  return (
    <div className="relative min-h-screen bg-linear-to-b from-background via-muted/20 to-background flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Decorative blurred glowing background circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />

      {/* Floating Sparkles decoration */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary/40 text-xs font-semibold uppercase tracking-widest select-none">
        <Sparkles className="h-4 w-4 animate-pulse" />
        HireLens AI Workspace
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="group mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <Card className="w-full bg-card/65 backdrop-blur-xl border border-border/40 shadow-2xl relative">
          <CardHeader className="flex flex-col items-center pb-2">
            {/* User Profile Avatar with custom border glow */}
            <div className="relative group/avatar mb-4">
              <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-primary to-indigo-500 opacity-60 group-hover/avatar:opacity-100 blur-xs transition-opacity duration-300" />
              <Avatar className="relative h-24 w-24 border-2 border-background ring-4 ring-primary/10 transition-transform duration-300 group-hover/avatar:scale-103 cursor-pointer">
                <AvatarImage src={user.avatar} alt={user.userName} />
                <AvatarFallback className="bg-muted text-xl font-bold tracking-wider text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* User details */}
            <h1 className="text-2xl font-semibold tracking-tight text-center flex items-center gap-1.5">
              {user.userName}
            </h1>
            <Badge
              variant="outline"
              className="mt-1 bg-primary/5 text-primary border-primary/20 flex items-center gap-1"
            >
              <ShieldCheck className="h-3 w-3" />
              Active Member
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            <div className="space-y-4">
              {/* User Email Details */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/20 transition-colors hover:bg-muted/40">
                <div className="p-2 rounded-md bg-background text-muted-foreground shadow-xs">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Email Address</p>
                  <p className="text-sm font-medium truncate">{user.email}</p>
                </div>
              </div>

              {/* User Username details */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/20 transition-colors hover:bg-muted/40">
                <div className="p-2 rounded-md bg-background text-muted-foreground shadow-xs">
                  <User className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">User Name</p>
                  <p className="text-sm font-medium truncate">
                    @{user.userName.toLowerCase().replace(/\s+/g, "")}
                  </p>
                </div>
              </div>
            </div>

            <Separator className="bg-border/40" />

            {/* Quick Stats section */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Workspace Summary
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-border/30 bg-muted/10 text-center">
                  <p className="text-xs text-muted-foreground">Account Tier</p>
                  <p className="text-sm font-semibold mt-1">Professional</p>
                </div>
                <div className="p-3 rounded-lg border border-border/30 bg-muted/10 text-center flex flex-col items-center justify-center">
                  <p className="text-xs text-muted-foreground flex items-center gap-1 justify-center">
                    <Calendar className="h-3 w-3" />
                    Member Since
                  </p>
                  <p className="text-sm font-semibold mt-1">June 2026</p>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-2 pt-2 pb-6">
            <Button
              className="w-full transition-all duration-300 bg-primary hover:bg-primary/95 text-primary-foreground font-medium rounded-lg"
              onClick={() => router.push("/")}
            >
              Back to Home
            </Button>
            <Button
              variant="outline"
              className="w-full text-destructive border-destructive/20 hover:bg-destructive/5 hover:text-destructive transition-colors duration-300 font-medium rounded-lg flex items-center justify-center gap-2"
              onClick={() => setShowSignOutDialog(true)}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Confirmation SignOut Dialog */}
      <SignOutDialog
        open={showSignOutDialog}
        onOpenChange={setShowSignOutDialog}
        onConfirm={handleSignOutConfirm}
      />
    </div>
  );
}
