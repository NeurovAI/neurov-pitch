import Image from "next/image";
import Link from "next/link";
import app from "./assets/app.png";
import tuff3 from "./assets/tuff3.png";
import { Card } from "./ui";

export function SectionNext() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>What's coming next</span>
        <span className="text-muted-foreground">
          <Link href="/">neurov.ai</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="md:col-span-2">
            <Card className="h-full flex items-center justify-center p-6">
              <Image src={tuff3} width={800} alt="What's coming next" quality={100} className="w-full h-auto object-contain" />
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-full border border-border rounded-xl p-6 bg-[#0C0C0C]">
            <h2 className="mb-24 block text-xl">Native app</h2>
            <span />
            <Image src={app} width={698} alt="App" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
