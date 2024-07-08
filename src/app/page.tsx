"use client";
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Section } from "./_components/section";
import { useEffect, useLayoutEffect, useState } from "react";
import SplashScreen from "./_components/splash-screen";
import Footer from "./_components/footer";
import { usePathname } from "next/navigation";
import Another_section from "./_components/another_section";

export default function Index() {
  // const pathname = usePathname()
  // const isHome = pathname === '/'
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(()=>{
  //   setIsLoading(true)
  //   setTimeout(()=>{
  //     setIsLoading(false)
  //   },3000)
  // },[])

  return (
    <main>
      {/* {isLoading && isHome ? <SplashScreen /> : */}
      <Container>
        <Intro />
        <Section />
        <Another_section />
        {/* <Footer /> */}
      </Container>
      {/* } */}
    </main>
  );
}
