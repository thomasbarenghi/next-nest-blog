import SecurityHOC from "@/services/securityHoc";
import Querier from "@/services/querier";
import { ClientHeader, Footer } from "@/components";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <SecurityHOC> */}
      {/* <Querier>{children}</Querier> */}
      {/* </SecurityHOC> */}
      <main className="!p-0 max-w-[100vw] ">
        <ClientHeader />
        <div
          id="base"
          className="flex o w-full min-h-screen justify-center items-center    "
        >
          <div id="container" className="flex justify-center w-full  ">
            <div id="lateral1" className="hidden 2xl:flex w-full"></div>
            <div
              id="central"
              className="containerInner min-w-[100vw] max-w-[100vw] 2xl:min-w-[1536px] 2xl:w-full 2xl:max-w-screen-2xl flex "
            >
              <div className="w-full  seccion1-x pt-[110px]">{children}</div>
              <aside className="bg-emerald-50 seccion1-x pt-[110px] sticky top-0 left-0 h-screen w-[400px] min-w-[400px] ">
                <ProfileSidebar />
              </aside>
            </div>
            <div
              id="lateral2"
              className="hidden 2xl:flex bg-red-50 w-full"
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}

function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src="/image/auth/register.jpg"
        className="object-cover aspect-square rounded-full "
        alt="Logo"
        width={80}
        height={80}
      />
      <div>
        <p className="subtitulo font-medium">Thomas Barenghi</p>
        <p className="smalltext">@thomasbarenghi</p>
      </div>
      <div>
        <p className="smalltext">
          Psychologist and blogger. I help people use psychology for meaningful
          personal growth: https://nickwignall.com
        </p>
      </div>
      <button className="primaryButton smalltext w-max mt-1">Seguir</button>
    </div>
  );
}
