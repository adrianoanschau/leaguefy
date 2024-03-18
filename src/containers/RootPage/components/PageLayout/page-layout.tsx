import { PropsWithChildren, ReactNode } from "react";

export default function PageLayout({
  children,
  leftMenu,
}: PropsWithChildren<{ leftMenu?: ReactNode }>) {
  return (
    <main>
      <div className="wrapper">
        <div className="flex flex-row">
          {leftMenu && (
            <aside className="hidden sm:block sm:basis-1/4 md:basis-1/6">
              {leftMenu}
            </aside>
          )}
          <div className="grow">{children}</div>
          <aside className="hidden md:block basis-1/4"></aside>
        </div>
      </div>
    </main>
  );
}
