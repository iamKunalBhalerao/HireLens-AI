import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "How does HireLens AI check my job eligibility?",
    answer:
      "We compare your resume's skills, experience, and projects directly against the job description. Our AI analyzes semantically—meaning it checks for conceptual matching, not just keyword counts.",
  },
  {
    question: "Can I use it to optimize my resume for ATS?",
    answer:
      "Yes! We show you the exact keywords and skills required by the job that are missing from your resume, helping you pass automated ATS screeners.",
  },
  {
    question: "Is HireLens AI free for students?",
    answer:
      "Our Basic plan is 100% free and includes 5 compatibility scans a month. We also offer a highly affordable Pro plan for active job seekers needing unlimited scans and mock assessments.",
  },
  {
    question: "How do mock assessments work?",
    answer:
      "Once you run an eligibility scan, HireLens AI can generate mock technical or behavioral interview questions based on the gaps in your profile to help you practice.",
  },
  {
    question: "Is my resume data safe?",
    answer:
      "Absolutely. We encrypt all uploads and never sell your profile data to third parties. Your resume is used solely to generate your compatibility reports.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            FAQs
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Got questions? We’ve got answers ready
          </h2>
        </div>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-6"
          >
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  {faq.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
