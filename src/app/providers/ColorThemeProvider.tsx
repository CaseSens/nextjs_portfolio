"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ReactNode, useEffect, useState } from "react";

interface ColorThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ColorThemeProvider({
  children,
  ...props
}: ColorThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
