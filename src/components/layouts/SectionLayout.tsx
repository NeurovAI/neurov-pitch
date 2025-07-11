import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerLeft?: string;
  headerRight?: string;
}

export function SectionLayout({ 
  children, 
  className, 
  headerLeft, 
  headerRight 
}: SectionLayoutProps) {
  return (
    <div className="min-h-screen relative w-screen">
      {/* Header */}
      {(headerLeft || headerRight) && (
        <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
          <span>{headerLeft}</span>
          <span className="text-[#878787]">{headerRight}</span>
        </div>
      )}
      
      {/* Main Content Container */}
      <div className={cn(
        "container min-h-screen flex flex-col justify-center",
        className
      )}>
        {children}
      </div>
    </div>
  );
} 