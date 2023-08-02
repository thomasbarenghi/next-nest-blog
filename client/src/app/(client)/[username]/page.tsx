"use client";
import Image from "next/image";
import { useState } from "react";

const articles = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "You’ll never look at pumpernickel the same way again. — Halloween is still more than 100 days away, so it’s troublingly early to be turning up the spookiness dial (yes, we have a spookiness dial), but theres no law",
    image: "/image/auth/login.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "You’ll never look at pumpernickel the same way again. — Halloween is still more than 100 days away, so it’s troublingly early to be turning up the spookiness dial (yes, we have a spookiness dial), but theres no law",
    image: "/image/publicHome/s1.jpg",
  },
];

export default function UserPage({ params }: { params: { username: string } }) {
  //quitamos el @ que llega como %40 del username
  const cleanUsername = params.username.replace("%40", "");

  const titles = ["Publicaciones", "Sobre Thomas", "Contacto"];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section className="flex flex-col w-full gap-10  ">
        <div className="w-full flex flex-col gap-6">
          <h1 className=" font-semibold w-full titulo-1">Thomas Barenghi</h1>
          <Tabs
            titles={titles}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <Articles articles={articles} />
      </section>
    </>
  );
}

type ArticlesProps = {
  articles: any[];
};

function Articles({ articles }: ArticlesProps) {
  return (
    <div className="flex flex-col gap-10">
      {articles.map((article, index) => (
        <div className="flex gap-10 items-center cursor-pointer">
          <div className="w-auto flex flex-col gap-[2px]">
            <h2 className="titulo-3">{article.title}</h2>
            <p className="font-light articleText">{article.description}</p>
          </div>
          <div className="relative  h-auto min-w-[180px] aspect-[4/3]  rounded-3xl overflow-hidden ">
            <Image
              src={article.image}
              alt="portada"
              fill
              className="object-cover  aspect-[4/3]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

type TabsProps = {
  titles: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

function Tabs({ titles, currentIndex, setCurrentIndex }: TabsProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex  gap-5">
        {titles.map((title, index) => (
          <button
            key={index}
            className={`${
              currentIndex === index
                ? "text-black font-semibold smalltext"
                : "text-black smalltext"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <hr className="w-full mt-3  border-emerald-700" />
    </div>
  );
}
