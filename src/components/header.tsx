import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
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
  return (
    <header>
      <div className="container py-4 flex justify-between">
        <Link href="/">
          <span className="sr-only">Go to homepage</span>
          <Image
            src={logo}
            className="w-24"
            alt="Bytee media logo"
            title="Bytee media logo"
            role="presentation"
            width={300}
            height={300}
            quality={100}
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
