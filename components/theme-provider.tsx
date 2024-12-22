"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

export function ThemeProvider({ 
  children, 
  ...props 
}: ThemeProviderProps): React.ReactElement {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
} 