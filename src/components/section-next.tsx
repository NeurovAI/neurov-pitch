import Image from "next/image";
import Link from "next/link";
import app from "./assets/app.png";
import tuff3 from "./assets/tuff3.png";
import { Card } from "./ui";

export function SectionNext() {
  return (
    <div className="relative w-screen md:min-h-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>What&apos;s coming next</span>
        <span className="text-muted-foreground">
          <Link href="/">arenacrm.com</Link>
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-8 md:pb-16 md:min-h-[calc(100vh-5rem)] md:flex md:flex-col md:justify-center">
        <div className="grid md:grid-cols-3 gap-8 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="md:col-span-2">
            <Card className="h-[595px] md:h-[680px] flex flex-col p-6">
              <h2 className="mb-6 block text-xl">Funnel forms and voice agent NIVA v0.5</h2>
              <div className="flex-1 flex items-center justify-centre min-h-0">
                <Image src={tuff3} width={800} alt="What's coming next" quality={100} className="w-full h-auto object-contain max-h-full" />
              </div>
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-[595px] md:h-[680px] border border-border rounded-xl p-6 bg-[#0C0C0C]">
            <h2 className="mb-6 block text-xl text-center">Native app</h2>
            <div className="flex items-center justify-center h-full">
              <Image src={app} width={698} alt="App" quality={100} className="w-full h-auto object-contain max-h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
