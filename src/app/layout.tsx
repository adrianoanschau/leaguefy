import "../assets/styles/globals.sass";

import { PropsWithChildren } from "react";
import { RootPage } from "@/containers";
import { SoccerDataContextProvider, ThemeContextProvider } from "@/contexts";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <meta
        name="google-adsense-account"
        content="ca-pub-8804111254804343"
      ></meta>
      <ThemeContextProvider>
        <SoccerDataContextProvider>
          <RootPage>{children}</RootPage>
        </SoccerDataContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
