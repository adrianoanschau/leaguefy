import "../assets/styles/globals.sass";

import { RootPage } from "@/containers";
import { ThemeContextProvider } from "@/contexts";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <RootPage>{children}</RootPage>
      </ThemeContextProvider>
    </html>
  );
}
