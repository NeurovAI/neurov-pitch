import Image from "next/image";
import Link from "next/link";
import gonzi from "./assets/gonzi.png";
import amin from "./assets/amin.png";
import socialProof from "./assets/social-proof.png";
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
          <div className="space-y-8 flex flex-col items-center">
            <Image
              src={socialProof}
              alt="Social Proof"
              width={400}
              height={500}
              quality={100}
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
