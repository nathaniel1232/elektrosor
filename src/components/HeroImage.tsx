"use client";

import { useState } from "react";
import { BoltIcon } from "@/components/Icons";

export default function HeroImage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/40 aspect-[4/3] sm:aspect-[5/4] bg-blue-800/40 border border-blue-700/40 relative">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/hero.jpg"
          alt="Elektro Sør sitt bygg i Mandal"
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-blue-300/70 gap-2">
          <BoltIcon className="w-10 h-10" />
          <p className="text-xs font-medium">Legg til public/images/hero.jpg</p>
        </div>
      )}
    </div>
  );
}
