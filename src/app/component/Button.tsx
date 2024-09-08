import Link from "next/link";

type ButtonProps = {
  label: string;
  url: string;
  external?: boolean;
};

export default function Button({ label, url, external }: ButtonProps) {
  if (!url) {
    return null;
  }

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#243662] text-white font-medium py-2 px-4 rounded w-min"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={url} className="bg-[#243662] text-white font-semibold py-2 px-4 rounded w-min">
      {label}
    </Link>
  );
}
