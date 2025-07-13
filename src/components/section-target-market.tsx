import Image from "next/image";
import Link from "next/link";
import gonzi from "./assets/gonzi.png";
import amin from "./assets/amin.png";
import { Card } from "./ui";

export function SectionTargetMarket() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Target market</span>
        <span className="text-muted-foreground">
          <Link href="/">neurov.ai</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:pt-0 pb-[100px] md:pb-0">
          <div className="space-y-8">
            <h2 className="text-2xl font-regular mb-6">Pilot Clients</h2>
            <Card className="flex-col md:flex-row items-start md:items-stretch space-y-4 md:space-y-0 md:space-x-0 relative">
              {/* Gonzalo's image container - left side on desktop */}
              <div className="w-full md:w-[30%] flex-shrink-0 h-48 md:h-auto">
                <Image
                  src={gonzi}
                  alt="Gonzalo Gonzalez"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text content container - right side on desktop */}
              <div className="w-full md:w-[70%] flex flex-col justify-start space-y-2 md:pl-6 pt-0 md:pt-0">
                <h2 className="text-xl">Gonzalo Gonzalez</h2>
                <span>Pilot Client and Business Partner</span>

                <p className="text-muted-foreground text-sm">
                  Our access to the company USHEALTH Advisors (USHA) with over 4000 health insurance advisors who are starving for our solution. <br />
                  <br />
                  Gonzalo provides direct market validation and strategic partnership opportunities. <br />
                  His network represents our primary target market at scale. <br />
                  Proven demand for intelligent CRM automation in the health insurance sector.
                </p>
              </div>
            </Card>

            <Card className="flex-col md:flex-row items-start md:items-stretch space-y-4 md:space-y-0 md:space-x-0 relative">
              {/* Amin's image container - left side on desktop */}
              <div className="w-full md:w-[30%] flex-shrink-0 h-48 md:h-auto">
                <Image
                  src={amin}
                  alt="Amin Kordian"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text content container - right side on desktop */}
              <div className="w-full md:w-[70%] flex flex-col justify-start space-y-2 md:pl-6 pt-0 md:pt-0">
                <h2 className="text-xl">Amin Kordian</h2>
                <span>Pilot Client and Agency Leader</span>

                <p className="text-muted-foreground text-sm">
                  Leads a team of 20+ Health Advisors who subcontract underneath his agency. <br />
                  <br />
                  Provides real-world testing environment for our CRM solution. <br />
                  Direct feedback from active health insurance professionals. <br />
                  Validates product-market fit in the health advisory space.
                </p>
              </div>
            </Card>

          </div>
          <div className="space-y-8">
            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Phase 1
              </span>

              <h2 className="text-2xl">Test with Pilot Clients</h2>
              <p className="text-muted-foreground text-sm text-center">
                Leverage warm network from USHA to refine product-market fit. <br/> 
                Add features to accommodate their pain points. <br/>
                Achieve 100% satisfaction rating.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Phase 2
              </span>

              <h2 className="text-2xl">Dominate US health insurance niche</h2>
              <p className="text-muted-foreground text-sm text-center">
                Dominate the US health insurance niche by acquiring 500+ of the highest performing advisors, achieving 100% satisfaction rating.
              </p>
            </Card>

            <Card className="pb-8">
              <span className="py-1 px-4 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-medium mb-4">
                Phase 3
              </span>

              <h2 className="text-2xl">Expand to other niches</h2>
              <p className="text-muted-foreground text-sm text-center">
                Once configuraiton and product-market fit is established, expand to other niches. Leveraging organic and paid acquisition channels.
              </p>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
