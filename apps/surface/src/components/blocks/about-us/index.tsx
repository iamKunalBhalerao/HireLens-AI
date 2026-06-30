"use client";
import AboutUs from "@/components/blocks/about-us/about-us";
import { Target, WandSparkles, Zap } from "lucide-react";

const aboutusData = [
  {
    icon: WandSparkles,
    title: "Insights",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Zap,
    title: "Practice",
    color: "bg-teal-400/10 text-teal-400",
  },
  {
    icon: Target,
    title: "Success",
    color: "bg-orange-400/10 text-orange-400",
  },
];

const statisticsCounter = [
  {
    title: "k+ Eligibility Scans Run",
    count: 100,
  },
  {
    title: "k+ Job Matches Found",
    count: 15,
  },
  {
    title: "% Increase in Interview Invites",
    count: 82,
  },
];

const AboutAndStats = () => {
  return (
    <>
      <AboutUs
        aboutusData={aboutusData}
        statisticsCounter={statisticsCounter}
      />
    </>
  );
};

export default AboutAndStats;
