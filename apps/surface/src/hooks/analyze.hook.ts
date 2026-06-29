import { Analyze } from "@/services/analyze.service";
import { useState } from "react";

const useAnalyze = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleAnalyze = async ({
    jobDescription,
    selfDescription,
    resume,
  }: {
    jobDescription: string;
    selfDescription: string;
    resume: File;
  }) => {
    try {
      setLoading(true);
      const response = await Analyze({
        jobDescription,
        selfDescription,
        resume,
      });
      setLoading(false);
      console.log("response in hook: ", response);
      return response;
    } catch (error) {
      setLoading(false);
      console.error("Error during analysis:", error);
      return error;
    }
  };

  return {
    loading,
    handleAnalyze,
  };
};

export default useAnalyze;
