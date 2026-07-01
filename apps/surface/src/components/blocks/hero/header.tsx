"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import {
  LogOut,
  Menu,
  MessageSquareText,
  Settings,
  User,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useAuthStore } from "@/store/auth.store";
import { useAuth } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import UserProfile from "@/components/userProfile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOutDialog from "@/components/logout-dialog";
import CollaborateButton from "@/components/collaboration-button";
import { Logo } from "@/components/logo";
import Link from "next/link";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const Header = ({ navigationData, className }: HeaderProps) => {
  const { user, isAuthenticated } = useAuthStore();
  const { handleSignOut } = useAuth();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);

  const handleSignOutConfirm = async () => {
    setShowSignOutDialog(false);
    await handleSignOut();
    router.push("/");
    router.refresh();
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
    if (window.scrollY < 80) {
      setActiveSection("#home");
    }
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  useEffect(() => {
    const sectionIds = navigationData
      .map((item) => item.href)
      .filter((href) => href.startsWith("#") && href.length > 1)
      .map((href) => href.substring(1));

    if (sectionIds.length === 0) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navigationData]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={cn(
        "inset-x-0 z-50 px-4 flex items-center justify-center sticky top-0 h-20",
        className,
      )}
    >
      <div
        className={cn(
          "w-full max-w-6xl flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
          sticky
            ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
            : "bg-transparent border-transparent",
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="#home"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <Logo className="h-8 w-8 text-foreground" />
            <span className="font-semibold tracking-tight text-xl">
              HireLens AI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="max-lg:hidden bg-muted p-0.5 rounded-full">
            <NavigationMenuList className="flex gap-0">
              {navigationData.map((navItem) => {
                const isCurrentActive = activeSection
                  ? navItem.href === activeSection
                  : navItem.isActive;

                return (
                  <NavigationMenuItem key={navItem.title}>
                    <NavigationMenuLink
                      href={navItem.href}
                      className={cn(
                        "px-2 lg:px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-normal",
                        isCurrentActive
                          ? "bg-background text-foreground shadow-xs border border-border/40"
                          : "",
                      )}
                    >
                      {navItem.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="flex gap-4">
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <UserProfile userName={user.userName} email={user.email} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/user/profile")}>
                  <User className="h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/settings")}>
                  <Settings className="h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/review")}>
                  <MessageSquareText className="h-4 w-4" /> All Reviews
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => setShowSignOutDialog(true)}
                >
                  <LogOut className="h-4 w-4" /> SignOut
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <CollaborateButton className="hidden lg:flex" />
          )}

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger id="mobile-menu-trigger" asChild>
                <button className="rounded-full border border-border p-2 block cursor-pointer">
                  <Menu width={20} height={20} />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>

              <SheetContent
                showCloseButton={false}
                side="right"
                className="w-full sm:w-96 p-0 border-l-0"
              >
                <div className="flex items-center justify-between p-6">
                  <Link
                    href="#home"
                    className="flex items-center gap-2 hover:cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Logo className="h-8 w-8 text-foreground" />
                    <span className="font-semibold tracking-tight text-xl">
                      HireLens AI
                    </span>
                  </Link>
                  <SheetClose id="mobile-menu-close" asChild>
                    <button className="rounded-full border border-border p-2.5 block cursor-pointer">
                      <X width={16} height={16} />
                    </button>
                  </SheetClose>
                </div>

                <div className="flex flex-col gap-12 px-6 pb-6 overflow-y-auto">
                  <div className="flex flex-col gap-8">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <NavigationMenu
                      orientation="vertical"
                      className="items-start flex-none"
                    >
                      <NavigationMenuList className="flex flex-col items-start gap-3">
                        {navigationData.map((item) => {
                          const isCurrentActive = activeSection
                            ? item.href === activeSection
                            : item.isActive;

                          return (
                            <NavigationMenuItem key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
                                  isCurrentActive
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:translate-x-2",
                                )}
                              >
                                <div
                                  className={cn(
                                    "h-0.5 bg-primary transition-all duration-300 overflow-hidden",
                                    isCurrentActive
                                      ? "w-4 mr-2 opacity-100"
                                      : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100",
                                  )}
                                />
                                {item.title}
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          );
                        })}
                      </NavigationMenuList>
                    </NavigationMenu>

                    <div className="w-fit">
                      {isAuthenticated && user ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="rounded-full focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2">
                            <UserProfile
                              userName={user.userName}
                              email={user.email}
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => router.push("/user/profile")}
                            >
                              <User className="h-4 w-4" /> Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => router.push("/user/settings")}
                            >
                              <Settings className="h-4 w-4" /> Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => router.push("/review")}
                            >
                              <MessageSquareText className="h-4 w-4" /> All
                              Reviews
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              variant="destructive"
                              onSelect={() => setShowSignOutDialog(true)}
                            >
                              <LogOut className="h-4 w-4" /> SignOut
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <CollaborateButton onClick={() => setIsOpen(false)} />
                      )}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex gap-3">
                      {[
                        "lucide:dribbble",
                        "lucide:instagram",
                        "lucide:twitter",
                        "lucide:linkedin",
                      ].map((icon) => (
                        <a
                          key={icon}
                          href="#"
                          className="flex items-center justify-center rounded-full outline outline-border hover:bg-muted transition p-3 shadow-xs"
                        >
                          <Icon icon={icon} width={16} height={16} />
                        </a>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      © 2026 Shadcn Space
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <SignOutDialog
        open={showSignOutDialog}
        onOpenChange={setShowSignOutDialog}
        onConfirm={handleSignOutConfirm}
      />
    </motion.header>
  );
};

export default Header;
