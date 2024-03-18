import "../assets/styles/globals.sass";

import { RootPage } from "@/containers";
import { ThemeContextProvider } from "@/contexts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <RootPage>{children}</RootPage>
      </ThemeContextProvider>
    </html>
  );
}
