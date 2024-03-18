import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainMenu } from "@/options/main-menu";
import { classNames } from "@/utils/class-names";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex">
      <div className="wrapper">
        <ul className="main-menu menu menu-vertical md:menu-horizontal p-0">
          {mainMenu.map((item) => (
            <li
              key={item.label}
              className={classNames(
                "border-b-2 border-transparent",
                pathname === item.href ? "active" : ""
              )}
            >
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
