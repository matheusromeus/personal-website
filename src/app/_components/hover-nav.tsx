"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Component() {
  const [activeLink, setActiveLink] = useState("home.");
  const links = ["home.", "works.", "resume.", "thoughts."];
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (path === "/works.") {
      setActiveLink(`${links[1]}`);
    } else if (path === "/") {
      setActiveLink(`${links[0]}`);
    }
  }, [path]);

  const handleClick = (link: string) => {
    if (link === activeLink) return;
    else if (link === "thoughts.") {
      router.push("https://digital-bleeding-blog.vercel.app/");
    } else if (link === "home.") {
      router.push("/");
    } else if (link === "resume.") {
      router.push(
        "https://drive.google.com/file/d/1BvKdpyz27-7MTRmRlijiqkNaqOU0xYp4/view?usp=sharing"
      );
    } else router.push(link);
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 h-fit">
      <nav className="rounded-r-full py-2 flex flex-col items-start relative">
        <motion.div
          className="absolute top-0 left-0 bottom-0 bg-white rounded-r-full"
          layoutId="active-pill"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            width: "100%",
            height: `${100 / links.length}%`,
            top: `${(links.indexOf(activeLink) * 100) / links.length}%`,
          }}
        />
        {links.map((link) => (
          <motion.button
            key={link}
            className={`px-6 py-2 w-full text-left text-sm font-medium relative z-10 hover:text-black ${
              activeLink === link ? "text-black" : "text-gray-300"
            }`}
            onClick={() => handleClick(link)}
            whileHover={{ x: 5 }}
            whileTap={{ x: 2 }}
          >
            {link}
          </motion.button>
        ))}
      </nav>
    </div>
  );
}
