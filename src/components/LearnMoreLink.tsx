import Link from "next/link";

interface LearnMoreLinkProps {
  href?: string;
  label?: string;
  variant?: "default" | "dark";
}

export default function LearnMoreLink({
  href = "#",
  label = "Learn More",
  variant = "default",
}: LearnMoreLinkProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const styles =
  variant === "dark"
    ? `${base} bg-[#3d0a3f] text-white hover:bg-[#5a1260] focus-visible:ring-[#3d0a3f]`
    : `${base} border border-[#3d0a3f] text-[#3d0a3f] hover:bg-[#3d0a3f] hover:text-white focus-visible:ring-[#3d0a3f]`;

  return (
    <Link href={href} className={styles}>
      {label}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}
