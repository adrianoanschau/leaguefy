import { PageLayout } from "@/containers/RootPage/components";

export default function SoccerLayout({
  children,
  leftMenu,
}: Readonly<{
  children: React.ReactNode;
  leftMenu: React.ReactNode;
}>) {
  return (
    <PageLayout leftMenu={leftMenu}>
      <section>{children}</section>
    </PageLayout>
  );
}
