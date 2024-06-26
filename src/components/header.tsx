import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { Logo } from "@/components/logo";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = () => {
    setIsVisible(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header className="container sticky py-4 top-0 z-20 bg-neutral-950 flex justify-between">
      <Link href="/">
        <span className="sr-only">Go to homepage</span>
        <Logo />
      </Link>

      <button className="sm:hidden" onClick={handleOpen}>
        <span className="sr-only">Open menu</span>
        <MenuIcon />
      </button>

      <nav
        className={cn(
          "max-sm:fixed max-sm:z-50 max-sm:inset-4 max-sm:p-16 max-sm:bg-neutral-950 max-sm:border max-sm:scale-0" +
            " max-sm:transition-transform max-sm:origin-top-right max-sm:duration-300",
          isVisible && "max-sm:scale-100",
        )}
      >
        <button
          className="sm:hidden absolute right-4 top-4"
          onClick={handleClose}
        >
          <span className="sr-only">Close menu</span>
          <XIcon size={20} />
        </button>

        <ul className="flex max-sm:flex-col sm:items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={handleClose}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
