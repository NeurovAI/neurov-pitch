import { cn } from "@/lib/utils";

interface ContentGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export function ContentGrid({ 
  children, 
  className,
  columns = 3 
}: ContentGridProps) {
  const gridColsClass = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2", 
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
  };

  return (
    <div className={cn(
      "grid gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0",
      gridColsClass[columns],
      className
    )}>
      {children}
    </div>
  );
} 