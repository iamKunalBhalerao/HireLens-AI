"use client";
import Feature from "@/components/blocks/feature/feature";
import { Sparkles, Award, Scale, Layers } from "lucide-react";

const featureData = [
  {
    icon: Sparkles,
    content:
      "Upload your resume and get instant insights into how well your profile matches top industry roles.",
  },
  {
    icon: Award,
    content:
      "See a detailed compatibility percentage and find gaps between your skills and job requirements.",
  },
  {
    icon: Scale,
    content:
      "Take AI-generated practice assessments tailored to actual job roles to test your readiness.",
  },
  {
    icon: Layers,
    content:
      "Get structural and keyword recommendations to help your resume pass recruiter ATS filters.",
  },
];

const FeatureSection = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default FeatureSection;
