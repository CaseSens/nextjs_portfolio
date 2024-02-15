"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ReactNode } from "react";

interface ColorThemeProviderProps extends ThemeProviderProps {
  children: ReactNode;
}

export function ColorThemeProvider({ children, ...props }: ColorThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
