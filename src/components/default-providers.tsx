"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import { FilterContextProvider } from "@/contexts/filter-context";

interface DefaultProvidersProps {
  children: ReactNode;
}

const theme = {
  desktopBreakpoint768: "768px",
  desktopBreakpoint1024: "1024px",
  desktopBreakpoint1280: "1280px",
};

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
