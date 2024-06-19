import Image from "next/image";
import logo from "@/assets/logo.svg";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      className={cn("w-24", className)}
      alt="Bytee media logo"
      title="Bytee media logo"
      role="presentation"
      width={300}
      height={300}
      quality={100}
    />
  );
}
