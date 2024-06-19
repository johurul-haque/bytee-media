export function SocialLinks({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block p-2 rounded-full bg-gradient-to-b from-amber-dark via-amber-light to-amber-medium"
    >
      {children}
    </a>
  );
}
