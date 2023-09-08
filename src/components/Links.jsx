import Link from "next/link";

export default function Links({ link, current }) {
  return current === link.label ? (
    <Link className="text-sky-600" href={link.href}>
      {link.label}
    </Link>
  ) : (
    <Link href={link.href}>{link.label}</Link>
  );
}
