import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex border flex-col items-center justify-center border-border bg-card text-card-foreground rounded-xl px-6 pt-8 pb-6 space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}

type GridProps = {
  className?: string;
};

export function Grid({ className }: GridProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 flex justify-center opacity-20", className)}>
      <div className="h-full w-full grid-cols-6 gap-3.5 px-4 grid">
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
        <div className="border-r-[1px] border-[#161616]" />
      </div>
      <div className="h-full w-full absolute flex justify-between flex-col">
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
        <div className="border-t-[1px] border-[#161616]" />
      </div>
    </div>
  );
}
