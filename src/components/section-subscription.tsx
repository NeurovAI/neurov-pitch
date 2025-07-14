import Link from "next/link";
import { Card } from "./ui";

export function SectionSubscription() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>How we will make money</span>
        <span className="text-muted-foreground">
          <Link href="/">arenacrm.com</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="mb-4">
            <h2 className="text-2xl">Micro-SaaS Premium Positioning</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:pt-0 md:mb-[80px] mb-12">
            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Setup fee
              </span>

              <h2 className="text-2xl">15,000 USD</h2>
              <p className="text-muted-foreground text-sm text-center">
                Arena will begin as a premium offering for only the top performing health advisors, who are privately invited to use the software.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                SMS usage
              </span>

              <h2 className="text-2xl">0.8c/segment</h2>
              <p className="text-muted-foreground text-sm text-center">
                Arena incurs cost of 1.2c/segment <br/>
                and charges 2c/segment <br/>
                for a 40% margin. 
              </p>
            </Card>

            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Bookings
              </span>

              <h2 className="text-2xl">20 USD/qualified booking</h2>
              <p className="text-muted-foreground text-sm text-center">
                Users will be invoiced monthly on the number of qualified leads that were booked as a result of using TARA. 
              </p>
            </Card>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl">Scaling into Traditional SaaS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:pt-0">
            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Starter
              </span>

              <h2 className="text-2xl">39 USD/month</h2>
              <p className="text-muted-foreground text-sm text-center">
                Allow access to Agentic behaviour configuration. <br/>
                Limit on SMS capacity. <br/>
                Limit on lead storage.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Pro
              </span>

              <h2 className="text-2xl">99 USD/month</h2>
              <p className="text-muted-foreground text-sm text-center">
                Beta access to newest agentic features. <br/>
                Increased SMS capacity. <br/>
                Increased lead storage.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Enterprise
              </span>

              <h2 className="text-2xl">999 USD/month</h2>
              <p className="text-muted-foreground text-sm text-center">
                Bespoke customer service for prompt design. <br/>
                Unlimited SMS capacity. <br/>
                Unlimited lead storage.
              </p>
            </Card>
          </div>


        </div>
      </div>
    </div>
  );
}
