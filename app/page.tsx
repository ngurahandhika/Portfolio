"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <section className="pt-36 pb-36 transition duration-300 ease-in-out bg-dark h-screen">
        <div className="container px-16">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-2/5">
              <h1 className="text-base font-semibold text-indigo-500 md:text-xl">
                Halo, Aku
                <span className="mt-1 block text-3xl font-bold text-white lg:text-5xl">
                  Gusti Ngurah Andhika!
                </span>
              </h1>

              <h2 className="mb-8 mt-2 text-md md:text-lg font-medium text-white/80 lg:mt-3 lg:text-xl">
                Saya Junior -{" "}
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Software Engineer",
                    "UI/UX Designer",
                  ]}
                  typeSpeed={40}
                  loop
                  backSpeed={15}
                  className="font-bold text-white"
                />
              </h2>

              <p className="text-gray-300 mb-10 text-sm leading-relaxed sm:text-base">
                Full-stack developer di Indonesia, dan juga seorang pelajar.
                <span className="block">
                  Suka robotics, web development, dan hal-hal teknologi lainnya.
                </span>
              </p>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-0">
                <Image
                  alt="Gusti Ngurah Andhika"
                  src="/me/formal.png"
                  className="relative z-[1] mx-auto max-w-full"
                  width={417}
                  height={598}
                />
                <span className="absolute bottom-20 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    id="visual"
                    viewBox="0 0 400 400"
                    width="400"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g transform="translate(198.65073583466403 179.3546243623096)">
                      <path
                        d="M73 -86.6C89.9 -72.9 95.7 -45.4 107.2 -13.9C118.7 17.6 136 53 125.9 74.8C115.9 96.6 78.5 104.7 41.5 121.2C4.6 137.8 -31.9 162.9 -55.8 153.9C-79.7 145 -90.9 102 -102.2 66.7C-113.4 31.3 -124.7 3.7 -126.1 -28.1C-127.5 -59.9 -119 -95.8 -96.4 -108.5C-73.7 -121.2 -36.9 -110.6 -4.4 -105.4C28.1 -100.1 56.1 -100.2 73 -86.6"
                        fill="#4f39f6"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
