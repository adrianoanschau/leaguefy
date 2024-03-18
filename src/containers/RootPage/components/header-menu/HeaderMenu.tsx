import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { useTheme } from "@/contexts";
import { mainMenu } from "@/options/main-menu";
import { classNames } from "@/utils/class-names";

export default function HeaderMenu() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const handleClose = () => {
    const elem = document.activeElement as HTMLButtonElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown header-menu ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="main-menu menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 hidden sm:block"
      >
        <div className="md:hidden">
          {mainMenu.map((item) => (
            <li
              key={item.label}
              className={pathname === item.href ? "active" : ""}
            >
              <Link
                href={item.href}
                className={classNames(
                  "border-l-2 border-transparent",
                  pathname === item.href ? "active" : ""
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="divider m-0"></div>
        </div>
        {/* <li>
          <Link
            href="/settings"
            className={classNames(
              "border-l-2 border-transparent",
              pathname === "/settings" ? "active" : ""
            )}
          >
            Configurações
          </Link>
        </li>
        <div className="divider m-0"></div> */}
        <li>
          <div className="form-control flex flex-row justify-between">
            <span>Modo {theme === "dark" ? "Escuro" : "Claro"}</span>
            <input
              type="checkbox"
              className="toggle toggle-accent "
              checked={theme === "dark"}
              onChange={() => toggleTheme()}
            />
          </div>
        </li>
      </ul>
      <ul
        tabIndex={0}
        className="main-menu block sm:hidden menu menu-sm dropdown-content z-[10] py-2 px-4 bg-base-100 absolute m-0 w-screen h-screen top-0 bottom-0 left-0 right-0"
      >
        <div className="flex flex-row justify-end py-2 px-4">
          <button onClick={handleClose}>
            <XMarkIcon className="w-10 h-10" aria-hidden="true" />
          </button>
        </div>
        {/* <div className="divider m-0"></div>
        <div className="md:hidden">
          {mainMenu.map((item) => (
            <li
              key={item.label}
              className={pathname === item.href ? "active" : ""}
            >
              <Link
                href={item.href}
                className={classNames(
                  "border-l-2 border-transparent",
                  pathname === item.href ? "active" : ""
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="divider m-0"></div>
        </div> */}
        {/* <li>
          <Link
            href="/settings"
            className={classNames(
              "border-l-2 border-transparent",
              pathname === "/settings" ? "active" : ""
            )}
          >
            Configurações
          </Link>
        </li>
        <div className="divider m-0"></div> */}
        <li>
          <div className="form-control flex flex-row justify-between">
            <span>Modo {theme === "dark" ? "Escuro" : "Claro"}</span>
            <input
              type="checkbox"
              className="toggle toggle-accent "
              checked={theme === "dark"}
              onChange={() => toggleTheme()}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
