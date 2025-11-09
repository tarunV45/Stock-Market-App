"use client";
import Link from "next/link";
import { Nav_Items } from "@/lib/constants";
import { usePathname } from "next/navigation";
const Navitems = () => {
  const pathname: string = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return "/";

    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {Nav_Items.map(({ href, title }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href)
                ? "text-gray-100"
                : ""
            }`}
          >{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navitems;
