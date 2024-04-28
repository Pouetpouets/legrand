"use client"

import { Navbar } from "@/components/navbar";
import getSubscriptions from "@/lib/youtubeApi";
import YTB from "@/lib/ytb";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
<YTB />
      <Navbar />
      </div>


    </main>
  );
}
