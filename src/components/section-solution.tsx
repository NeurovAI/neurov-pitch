import Image from "next/image";
import Link from "next/link";
import overview from "./assets/overview.png";
import NeuroVMonogram from "./assets/neurov-monogram.svg";
import MonogramV1 from "./assets/monogram-v1.svg";
import { Card } from "./ui";

export function SectionSolution() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Our solution</span>
        <span className="text-muted-foreground">
          <Link href="/">arenacrm.com</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 pt-16 md:pt-16 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card>
              <div className="w-[60px] h-[60px] text-foreground">
                <Image
                  src={NeuroVMonogram}
                  alt="NeuroV Monogram"
                  width={60}
                  height={60}
                  className="w-full h-full dark:invert"
                />
              </div>
              <h2 className="text-2xl">TARA v0.5</h2>

              <p className="text-muted-foreground text-sm text-center">
              <strong>TARA is deployed on The Arena</strong>
              <br />
              Perform sentiment analysis on every message. <br />
              Automatically qualify leads. <br />
              Book interested leads. <br />
              Store uninterested leads in dead list. <br />
              Nurture booked leads to increases show-up rate. <br />
              </p>
            </Card>

            <Card>
              <div className="w-[80px] h-[80px] text-foreground">
                <Image
                  src={MonogramV1}
                  alt="Monogram V1"
                  width={80}
                  height={80}
                  className="w-full h-full dark:invert"
                />
              </div>

              <h2 className="text-2xl">The Arena</h2>

              <p className="text-muted-foreground text-sm text-center">
                <strong>One screen to manage acquisition channels</strong> <br />
                No overwhelm. <br />
                No clutter. <br />
                Only see what you need. <br />
              </p>
            </Card>
          </div>
          <div className="space-y-8">
            <div className="px-4">
              <h2 className="text-4xl text-center leading-tight">
                Gamified. <br />
                Intelligent. <br />
                Industry validated.
              </h2>
            </div>

            <Card>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={80}
                height={80}
                fill="none"
                className="text-foreground"
              >
                <mask
                  id="b"
                  width={80}
                  height={80}
                  x={0}
                  y={0}
                  maskUnits="userSpaceOnUse"
                  style={{
                    maskType: "alpha",
                  }}
                >
                  <path fill="#D9D9D9" d="M0 0h80v80H0z" />
                </mask>
                <g mask="url(#b)">
                  <path
                    fill="currentColor"
                    d="M13.333 66.667c-1.833 0-3.402-.653-4.708-1.959C7.319 63.403 6.667 61.833 6.667 60V20c0-1.833.652-3.403 1.958-4.708 1.306-1.306 2.875-1.959 4.708-1.959h53.334c1.833 0 3.402.653 4.708 1.959 1.305 1.305 1.958 2.875 1.958 4.708v40c0 1.833-.653 3.403-1.958 4.708-1.306 1.306-2.875 1.959-4.708 1.959H13.333Zm0-6.667h53.334V26.667H13.333V60ZM25 56.667 20.333 52l8.584-8.667-8.667-8.666L25 30l13.333 13.333L25 56.667Zm15 0V50h20v6.667H40Z"
                  />
                </g>
              </svg>

              <h2 className="text-2xl">Performance Analytics</h2>

              <p className="text-muted-foreground text-sm text-center">
                Track performance of your SMS campaigns. <br />
                SMS delivery rate. <br />
                Reply rate. <br />
                Booking rate. <br />
                Conversion rate. <br />
                Cost per lead. <br />
                Cost per booking. <br />
                Cost per conversion. <br />
                Cost per lead. <br />
                Cost per booking. <br />
                Cost per conversion. <br />
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full">
            <Image
              src={overview}
              alt="Overview"
              width={650}
              height={875}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
