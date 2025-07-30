"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center py-8 lg:py-36 transition duration-300 ease-in-out">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-md sm:text-xl md:text-2xl font-semibold text-indigo-500">
                Halo, Aku
                <span className="mt-1 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Gusti Ngurah Andhika
                </span>
              </h1>

              <h2 className="mb-6 sm:mb-8 mt-2 lg:mt-3 text-base sm:text-lg md:text-xl lg:text-xl font-medium text-white/80">
                Saya Junior -{" "}
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Software Engineer",
                    "UI/UX Designer",
                  ]}
                  typeSpeed={40}
                  loop
                  backDelay={2000}
                  backSpeed={15}
                  className="font-bold text-white"
                />
              </h2>

              <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Full-stack developer di Indonesia, dan juga seorang pelajar.{" "}
                Suka robotics, web-development, dan hal-hal teknologi lainnya.
              </p>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <Image
                    alt="Gusti Ngurah Andhika"
                    src="/me/formal2.png"
                    className="relative z-10 w-full h-auto object-contain"
                    width={417}
                    height={598}
                    priority
                  />
                  <div className="absolute top-8 sm:top-12 md:top-16 left-1/2 -translate-x-1/2 w-3/4 sm:w-4/5 md:w-full max-w-sm -z-0">
                    <svg
                      id="visual"
                      viewBox="0 0 400 400"
                      className="w-full h-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <g transform="translate(184.66884202802652 221.06619564306536)">
                        <path
                          d="M103 -109.7C129.7 -76.4 144.9 -38.2 141.1 -3.8C137.3 30.6 114.6 61.3 87.9 86.6C61.3 111.9 30.6 132 0.4 131.6C-29.9 131.3 -59.9 110.5 -76.5 85.2C-93.2 59.9 -96.6 29.9 -102.9 -6.2C-109.1 -42.4 -118.2 -84.9 -101.5 -118.2C-84.9 -151.5 -42.4 -175.8 -2.1 -173.6C38.2 -171.5 76.4 -143 103 -109.7"
                          fill="#4f39f6"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
