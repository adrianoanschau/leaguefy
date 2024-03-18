import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
  return (
    <main>
      <div className="wrapper">
        <div className="flex flex-row">
          <aside className="hidden sm:block sm:basis-1/4 md:basis-1/6"></aside>
          <div className="grow">{children}</div>
          <aside className="hidden md:block basis-1/4"></aside>
        </div>
      </div>
    </main>
  );
}
