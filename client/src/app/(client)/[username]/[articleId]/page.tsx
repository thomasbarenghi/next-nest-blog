"use client";
import Image from "next/image";
import { useState } from "react";

export default function UserPage({
  params,
}: {
  params: { articleId: string; username: string };
}) {
  const cleanUsername = params.username.replace("%40", "");
  return (
    <>
      <section className="flex flex-col w-full gap-10  ">
        {/* {params.articleId} of @{cleanUsername} */}
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className=" font-semibold w-full titulo-1">
                Special Report: Extreme Heat and Human Health
              </h1>
              <p className="bodyText">
                Extreme heat is a deadly threat that is becoming more common and
                severe due to climate change. This report examines the health
                impacts of extreme heat, who is most at risk, and how we can
                build resilience to heat waves.
              </p>
            </div>
            <div className="relative w-full h-[200px] rounded-3xl overflow-hidden ">
              <Image
                src="/image/publicHome/s1.jpg"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="articleTextBody max-w-full">
                Extreme heat is a clear and present danger to physical and
                mental health, now and increasingly into the future. In this
                multi-part Special Report, Wise & Well writers — physicians,
                research scientists, mental health experts and journalists — get
                beyond the news to delve deeply into several aspects of heats
                effects on the human condition, from the obvious to the
                unexpected. Over the next two weeks, youll also learn ways the
                problem can be mitigated at the societal level, and what you can
                do to protect yourself and your loved ones. Why Extreme Heat
                Kills So Quickly Humans evolved to survive in a pretty narrow
                temperature range. When the body exceeds that range, it starts
                to shut down. Death can follow quickly, sometimes horrifically.
                The writer wishes she understood this better when she took a
                fateful hike recently on a hot summer day. Find out what shes
                since learned reporting on the science of heat stroke and heat
                exhaustion, and what you need to know about this deadly force of
                nature. —By Kathleen Murphy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
