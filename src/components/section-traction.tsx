"use client";

// import { fetchGithubStars } from "@/actions/fetch-github-stars";
// import { fetchStats } from "@/actions/fetch-stats";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "./ui";

export function SectionTraction() {
  const [stars, setStars] = useState(308);
  const [users, setUsers] = useState(0);
  const [transactions, setTransactions] = useState(0);

  useEffect(() => {
    // async function fetchStars() {
    //   try {
    //     const response = await fetchGithubStars();
    //     setStars(response);
    //   } catch {}
    // }

    // async function fetchCount() {
    //   try {
    //     const { users, transactions } = await fetchStats();
    //     setUsers(users);
    //     setTransactions(transactions);
    //   } catch {}
    // }

    // fetchStars();
    // fetchCount();
  }, []);

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Where we are</span>
        <span className="text-muted-foreground">
          <Link href="/">neurov.ai</Link>
        </span>
      </div>
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Waitlist sign ups</h2>

              <p className="text-muted-foreground text-sm text-center">
                So far we have 2 clients signed, read to test the beta product.
              </p>

              <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                2
              </span>
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Test messages sent by TARA</h2>

              <p className="text-muted-foreground text-sm text-center">
                So far we have over 250 messages on test campaigns
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {stars &&
                    Intl.NumberFormat("en", { notation: "compact" }).format(
                        308
                    )}
                </span>
              </div>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Private beta users</h2>

              <p className="text-muted-foreground text-sm text-center">
                We are expecting to have 100 users in the private beta by the end of the year.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>

                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {users}
                </span>
              </div>
            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Leads Booked</h2>

              <p className="text-muted-foreground text-sm text-center">
                We are set to begin production testing with our pilot clients in the next 2 weeks.
              </p>

              <div className="flex items-center space-x-4">
                <span className="relative ml-auto flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>

                <span className="mt-auto font-mono text-[80px] md:text-[122px]">
                  {transactions &&
                    Intl.NumberFormat("en", { notation: "compact" }).format(
                      transactions
                    )}
                </span>
              </div>
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-full border border-border rounded-xl p-6 bg-[#0C0C0C] relative">
            <h2 className="mb-8 block text-[38px] text-white">What people say</h2>

            <div className="space-y-6">
              <Card className="p-6">
                <blockquote className="text-muted-foreground text-sm italic mb-4">
                  "                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "You're going to change SMS marketing forever. I have multiple teams that are ready and waiting for Arena the launch.""
                </blockquote>
                <cite className="text-muted-foreground text-sm font-medium">
                  - Gonzalo Gonzalez
                </cite>
              </Card>

              <Card className="p-6">
                <blockquote className="text-muted-foreground text-sm italic mb-4">
                  "                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "If you can nail this and stay compliant with US SMS law, i can promise you will have a lot of customers.""
                </blockquote>
                <cite className="text-muted-foreground text-sm font-medium">
                  - Amin Kordian
                </cite>
              </Card>

              <Card className="p-6">
                <blockquote className="text-muted-foreground text-sm italic mb-4">
                  "                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "The time that we would save with TARA would free us more to focus on customer care.""
                </blockquote>
                <cite className="text-muted-foreground text-sm font-medium">
                  - Amin Kordian
                </cite>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
