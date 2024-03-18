import "../assets/styles/globals.sass";

import { PropsWithChildren } from "react";
import { RootPage } from "@/containers";
import { SoccerDataContextProvider, ThemeContextProvider } from "@/contexts";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <SoccerDataContextProvider>
          <RootPage>{children}</RootPage>
        </SoccerDataContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
