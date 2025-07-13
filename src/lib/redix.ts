import "server-only";

import { Redis } from "@upstash/redis";

// Fallback to an in-memory stub when the required environment variables are not present.
const hasUpstashCreds =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

// Minimal interface we rely on in the codebase.
interface Incrable {
  incr(key: string): Promise<number>;
}

function createInMemoryClient(): Incrable {
  const store = new Map<string, number>();
  return {
    async incr(key: string) {
      const next = (store.get(key) ?? 0) + 1;
      store.set(key, next);
      return next;
    },
  };
}

export const client: Incrable = hasUpstashCreds
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL as string,
      token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
    })
  : createInMemoryClient();
