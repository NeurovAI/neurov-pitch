import Link from "next/link";
import { Card } from "./ui";

export function SectionVision() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between text-lg">
        <span>Our vision</span>
        <span className="text-muted-foreground">
          <Link href="/">arenacrm.com</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-[45px] md:text-[122px] font-medium text-center leading-none">
          Our mission is to become the #1 agentic CRM.
        </h1>
      </div>
    </div>
  );
}
