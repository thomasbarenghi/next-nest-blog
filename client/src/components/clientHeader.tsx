"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientHeader() {
  const pathname = usePathname();
  const btnText = pathname === "/auth" ? "Registrarse" : "Ingresar";
  const btnLink = pathname === "/auth" ? "/auth/register" : "/auth";

  return (
    <div className="seccion1-x !bg-transparent header py-8">
      <div className="headerInner  ">
        <Image src="/icon/logo.svg" alt="Logo" width={80} height={30} />

        <Link
          href={btnLink}
          className="primaryButton bg-emerald-200 text-emerald-800"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="headerNav absolute left-[50%]  translate-x-[-50%]">
      <Link href="/">Home</Link>
      <Link href="/about">Sobre nosotros</Link>
      <Link href="/faqs">FAQs</Link>
    </div>
  );
}
