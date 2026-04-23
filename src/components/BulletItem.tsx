interface BulletItemProps {
  text: string;
}

export default function BulletItem({ text }: BulletItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0" aria-hidden="true">
        <svg
          className="w-4 h-4 text-[#3d0a3f]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2L4.09 12.97H11L10 22L19.91 11H13L13 2Z" />
        </svg>
      </span>
      <span className="text-sm text-gray-700 leading-relaxed">{text}</span>
    </li>
  );
}
