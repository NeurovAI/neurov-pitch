import Image from "next/image";
import Link from "next/link";
import team1 from "./assets/team1.png";
import dmitriSitting from "./assets/Dmitri Neurov Sitting.png";
import aliStanding from "./assets/ali-neurov-standing.png";
import { Card } from "./ui";

export function SectionTeam() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Who we are</span>
        <span className="text-muted-foreground">
          <Link href="/">neurov.ai</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:pt-0 pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="flex-col md:flex-row items-start md:items-stretch space-y-4 md:space-y-0 md:space-x-0 relative">
              {/* Dmitri's image container - left side on desktop */}
              <div className="w-full md:w-[30%] flex-shrink-0 h-48 md:h-auto">
                <Image
                  src={dmitriSitting}
                  alt="Dmitri Jarkov"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text content container - right side on desktop */}
              <div className="w-full md:w-[70%] flex flex-col justify-start space-y-2 md:pl-6 pt-0 md:pt-0">
                <h2 className="text-xl">Dmitri Jarkov</h2>
                <span>Co-founder and COO</span>

                <p className="text-muted-foreground text-sm">
                  B.Eng (Chemical)(Honours) from UoA. <br />
                  <br />
                  3 years experience in Operational Leadership as a professional Engineer. <br />
                  Responsible for 60m USD in CAPEX for Oil and Gas Operator. <br />
                  Self-taugh full-stack developer.
                </p>
              </div>
            </Card>

            <Card className="flex-col md:flex-row items-start md:items-stretch space-y-4 md:space-y-0 md:space-x-0 relative">
              {/* Ali's image container - left side on desktop */}
              <div className="w-full md:w-[30%] flex-shrink-0 h-48 md:h-auto">
                <Image
                  src={aliStanding}
                  alt="Ali Mohammad"
                  width={400}
                  height={400}
                  quality={100}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text content container - right side on desktop */}
              <div className="w-full md:w-[70%] flex flex-col justify-start space-y-2 md:pl-6 pt-0 md:pt-0">
                <h2 className="text-xl">Ali Mohammad</h2>
                <span>Co-founder and CTO</span>

                <p className="text-muted-foreground text-sm">
                  UG B.Eng (Mechancal)(Honours) from UQ <br />
                  <br />
                  Former President of UQ Mech Eng Society. <br />
                  1300+ subscriber on YouTube educating his community on automation tools. <br />
                  Experienced in leveraging LLMs to build fully functional SaaS products. <br />
                  Self-taugh full-stack developer.
                </p>
              </div>
            </Card>

            {/* Quote directly below the founder cards */}
            <p className="text-4xl font-semibold mt-8 mb-0 text-center max-w-xl mx-auto">
              "Listen to customers. Never assume you know their pain."
            </p>
          </div>
          <div className="space-y-8 flex flex-col items-center">
            <h2 className="text-[60px] font-medium text-center leading-tight max-w-none">
              Speed. <br/>
              Hunger. <br/>
              Drive.
            </h2>
            <Image
              src={team1}
              alt="Team"
              width={800}
              height={1000}
              quality={100}
              className="w-full max-w-[800px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
