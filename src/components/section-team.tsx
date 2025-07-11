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
        <div className="grid md:grid-cols-2 gap-12 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="items-start space-y-0 relative">
              {/* Dmitri's image positioned in top-right corner */}
              <Image
                src={dmitriSitting}
                alt="Dmitri Jarkov"
                width={100}
                height={100}
                quality={100}
                className="absolute top-4 right-4 w-[100px] h-[100px] object-cover rounded-lg"
              />

              <h2 className="text-xl">Dmitri Jarkov</h2>
              <span>Co-founder and COO</span>

              <p className="text-muted-foreground text-sm !mt-2">
                B.Eng (Chemical)(Honours) from UoA. <br />
                <br />
                3 years experience in Operational Leadership as a professional Engineer. <br />
                Responsible for 60m USD in CAPEX for Oil and Gas Operator. <br />
                Self-taugh full-stack developer.
              </p>
            </Card>

            <Card className="items-start space-y-0 relative">
              {/* Ali's image positioned in top-right corner */}
              <Image
                src={aliStanding}
                alt="Ali Mohammad"
                width={100}
                height={100}
                quality={100}
                className="absolute top-4 right-4 w-[100px] h-[100px] object-cover rounded-lg"
              />

              <h2 className="text-xl">Ali Mohammad</h2>
              <span className="mb-4">Co-founder and CTO</span>

              <p className="text-muted-foreground text-sm !mt-2">
                UG B.Eng (Mechancal)(Honours) from UQ <br />
                <br />
                Former President of UQ Mech Eng Society. <br />
                1300+ subscriber on YouTube educating his community on automation tools. <br />
                Experienced in leveraging LLMs to build fully functional SaaS products. <br />
                Self-taugh full-stack developer.
              </p>
            </Card>
          </div>
          <div className="space-y-8 flex flex-col items-center">
            <h2 className="text-[60px] font-medium text-center leading-tight max-w-none">
              Our strength: Technical synergy and business acumen
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


              “”

        </div>
      </div>
    </div>
  );
}
