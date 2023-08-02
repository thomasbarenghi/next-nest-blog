import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="seccion1-x header py-8">
      <div className="headerInner  ">
        <Image src="/icon/logo.svg" alt="Logo" width={80} height={30} />
        <HeaderNav />
        <button className="primaryButton bg-emerald-200 text-emerald-800">
          Ingresar
        </button>
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
