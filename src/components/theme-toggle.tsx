"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Icons.Sun size={18} />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className="text-muted-foreground hover:text-foreground transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Icons.Sun size={18} className="transition-all duration-200" />
      ) : (
        <Icons.Moon size={18} className="transition-all duration-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
