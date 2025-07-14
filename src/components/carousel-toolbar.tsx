"use client";

import { useCarousel } from "./ui/carousel";
import { Icons } from "./ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";

import { ThemeToggle } from "./theme-toggle";

type Props = {
  views: number;
};

export function CarouselToolbar({ views }: Props) {
  const api = useCarousel();

  useHotkeys("arrowRight", () => api.scrollNext(), [api]);
  useHotkeys("arrowLeft", () => api.scrollPrev(), [api]);

  const handleBookMeeting = () => {
    window.open("https://cal.com/team/neurov-ai/arena-demo", "_blank");
  };

  return (
    <div className="fixed flex justify-center left-0 bottom-5 w-full">
        <AnimatePresence>
          <motion.div animate={{ y: views > 0 ? 0 : 100 }} initial={{ y: 100 }}>
            <TooltipProvider delayDuration={20}>
              <div className="flex backdrop-filter backdrop-blur-lg bg-background/80 dark:bg-background/80 h-10 px-4 py-2 border border-border items-center rounded-2xl space-x-4">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="text-muted-foreground flex items-center space-x-2 border-r-[1px] border-border pr-4">
                      <Icons.Visibility size={18} />

                      <span className="text-sm">
                        {Intl.NumberFormat("en", {
                          notation: "compact",
                        }).format(views ?? 0)}
                      </span>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Views</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={handleBookMeeting}>
                      <Icons.Calendar size={18} className="text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Book a meeting</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <ThemeToggle />
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Toggle theme</span>
                  </TooltipContent>
                </Tooltip>

                <div className="flex items-center border-l-[1px] border-border pl-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollPrev}
                        className={cn(!api?.canScrollPrev && "opacity-50")}
                        onClick={() => {
                          api.scrollPrev();
                        }}
                      >
                        <Icons.ChevronLeft className="h-6 w-6" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">Previous slide</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollNext}
                        className={cn(!api?.canScrollNext && "opacity-50")}
                        onClick={() => {
                          api.scrollNext();
                        }}
                      >
                        <Icons.ChevronRight className="h-6 w-6" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">Next slide</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          </motion.div>
        </AnimatePresence>
      </div>
  );
}
