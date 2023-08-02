"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const current = useAppSelector((state) => state.authSession.session.current);
  console.log(current);
  return (
    <section className="flex col-center ">
      <div className="w-[65%] col-center gap-2 ">
        <h1 className="text-center titulo-1">
          Descubre noticias, blogs y herramientas sobre el cuidado y la{" "}
          <b>evolución del medio ambiente.</b>
        </h1>
        <p className="text-center bodyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisis semper turpis eu facilisis. Sed tempor dui at justo
          vestibulum, nec imperdiet ipsum aliquet.
        </p>
        <Link href="/about" className="primaryButton mt-2">
          Quiero ser parte del cambio
        </Link>
      </div>
      <FlexImages />
    </section>
  );
}

function FlexImages() {
  const srcData = [
    {
      src: "/image/publicHome/s1.jpg",
      height: "h-[90%]",
    },
    {
      src: "/image/publicHome/s2.jpg",
      height: "h-[60%]",
    },
    {
      src: "/image/publicHome/s3.jpg",
      height: "h-[80%]",
    },
    {
      src: "/image/publicHome/s4.jpg",
      height: "h-[100%]",
    },
  ];

  return (
    <div className="flex justify-between items-end gap-5 h-[450px] w-full">
      {srcData.map((src: any, index: any) => (
        <div
          key={index}
          className={`relative flex gap-5  w-full ${src.height} `}
        >
          <Image src={src.src} alt="Logo" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
