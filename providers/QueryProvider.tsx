"use client";
import { ReactChildren } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const QueryProvider = ({ children }: ReactChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
};

export default QueryProvider;
