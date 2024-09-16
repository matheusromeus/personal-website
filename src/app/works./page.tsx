import React from "react";
import { cn } from "@/lib/utils";
import HoverNav from "@/app/_components/hover-nav";

const Works = () => {
  return (
    <div className="w-screen h-screen flex">
      <HoverNav />
      <div className="w-1/2 flex">
        <div className="h-1/2 mt-8 w-full">
          <div className="flex gap-2 flex-col ml-10 mt-32 justify-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight select-none">
              all work and no play makes jack a dull boy
            </h1>
            <p className="text-gray-400 mt-2 text-3xl tracking-tighter leading-tight select-none">
              but what if work is play?
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-5 pr-12 flex flex-col gap-4 overflow-scroll">
        <div className="flex gap-4">
          <div
            className={cn(
              "group cursor-pointer relative w-80 flex flex-col justify-between overflow-hidden rounded-xl",
              // light styles
              "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              // dark styles
              "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <a href="https://kevnroy.com">
              <div>
                <img src="/kr-favicon.png" className="ml-4" />
              </div>
            </a>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                Peronsal Website
              </h3>
              <p className="max-w-lg text-neutral-400">
                Made by yours truly. With Next.js & Tailwind CSS
              </p>
            </div>

            <div
              className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              )}
            ></div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </div>
          <div
            className={cn(
              "group cursor-pointer relative w-80 flex flex-col justify-between overflow-hidden rounded-xl",
              // light styles
              "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              // dark styles
              "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <a href="">
              <div>
                <img
                  src="https://cdn.dribbble.com/users/88883/screenshots/15909469/media/426d530bb189b697eff725907de20433.png"
                  className="m-8"
                />
              </div>
            </a>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                Meta-Craft
              </h3>
              <p className="max-w-lg text-neutral-400">
                Custom Component Library for Metaverse Ventures©
              </p>
            </div>
          </div>
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          ></div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
        <div className="flex gap-4">
          <div
            className={cn(
              "group cursor-pointer relative w-80 flex flex-col justify-between overflow-hidden rounded-xl",
              // light styles
              "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              // dark styles
              "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <a href="https://gst-consultations.vercel.app/">
              <div>
                <img src="/gst.png" className="m-8 ml-12" />
              </div>
            </a>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                GST Consultations
              </h3>
              <p className="max-w-lg text-neutral-400">
                Official Website of GST Consultations©, India
              </p>
            </div>

            <div
              className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              )}
            ></div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </div>
          <div
            className={cn(
              "group cursor-pointer relative w-80 flex flex-col justify-between overflow-hidden rounded-xl",
              // light styles
              "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              // dark styles
              "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <a href="https://digital-bleeding-blog.vercel.app/">
              <div>
                <img src="/chat.jpg" className="m-8 mt-12 rounded-l-xl" />
              </div>
            </a>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                LLM-integrated Copilot
              </h3>
              <p className="max-w-lg text-neutral-400">
                Bring your websites to life with the help of AI.
              </p>
            </div>
          </div>
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          ></div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
        <div className="flex gap-4">
          {/* row one */}
          <div
            className={cn(
              "group cursor-pointer relative w-[660px] flex flex-col justify-between overflow-hidden rounded-xl",
              // light styles
              "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              // dark styles
              "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
          >
            <a href="">
              <div>
                <img
                  src="/unconventional.png"
                  className="rounded-xl w-full m-4"
                />
              </div>
            </a>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ">
              <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                Unconventional - The Blog.
              </h3>
              <p className="max-w-lg text-neutral-400">
                Hyper Minimal Blogging Platform. No noise, no distractions.
              </p>
            </div>

            <div
              className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              )}
            ></div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
          </div>
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            )}
          ></div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
        <h1 className="text-5xl mt-10 md:text-7xl font-bold tracking-tighter leading-tight select-none">
          you could be{" "}
          <a
            className="underline hover:no-underline"
            href="mailto:kevnroy1@gmail.com"
          >
            next.
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Works;
