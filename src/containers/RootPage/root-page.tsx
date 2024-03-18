"use client";

import { PropsWithChildren } from "react";
import { PT_Sans } from "next/font/google";

import { Header, Main, MainNav } from "./components";
import { useTheme } from "@/contexts";

const ptSans = PT_Sans({ subsets: ["latin"], weight: "400" });

export default function RootPage({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <body className={ptSans.className} data-theme={theme}>
      <Header />
      {/* <MainNav /> */}
      <Main>{children}</Main>
    </body>
  );
}
