import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const HeaderNavigations = () => {
  
  const router = useRouter();


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoSrc = isMobile
    ? "/general/logomain.svg"
    : "/general/logomain.svg";

    const isActiveLink = (path:String) => {
      return router.pathname === path ? "active-link" : "";
    };
  return (
      <div>
        <header className="header-comp lg:px-20 px-4 py-4 flex items-center justify-between w-full fixed top-0 gap-10 h-[72px] z-50   shadow-sm lg:rounded-none rounded-md">
          <div className="flex gap-10 items-center justify-between w-full h-[72px] ">
              <Link
                href="/"
                className=" cursor-pointer"
              >
                
              <Image
                src={logoSrc}
                alt="Logo"
                className="w-full lg:h-10 mr-4   h-10"
                width={100}
                height={100}
              />
                  </Link>

            <nav className="hidden lg:flex gap-10 text-gray-800">
                <Link
                  href="/"
                  className={`hover:text-gray-300  py-2  ${
                    isActiveLink("/") ? "font-bold text-white border-b border-pink-600 shadow-sm" : " text-zinc-500"
                  }`}>
                  Home
                </Link>
                <Link
                  href="/digitalads"
                  className={`hover:text-gray-300   py-2  ${
                    isActiveLink("/digitalads")
                      ? "font-bold text-white border-b border-pink-600 shadow-sm"
                      : "text-zinc-500"
                  }`}>
                  Digital Ads
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-gray-300   py-2  ${
                    isActiveLink("/contact")
                      ? "font-bold text-white border-b border-pink-600 shadow-sm"
                      : "text-zinc-500"
                  }`}>
                  Design Work
                </Link>
                <Link
                  href="/about"
                  className={`hover:text-gray-300   py-2  ${
                    isActiveLink("/about") ? "font-bold text-white border-b border-pink-600 shadow-sm" : "text-zinc-500"
                  }`}>
                  About Us
                </Link>
            </nav>
            <div className="hidden lg:flex  items-center justify-center  h-[72px] ">
              <button
                className="bg-primary text-white hover:bg-navy-700  font-regular  items-center justify-center gap-2 px-[18px] py-2.5 rounded-lg shadow border border-neutral-50 j inline-flex"
                onClick={() => {
                  window.open("https://wa.me/+6282280002797", "_blank");
                }}>
                Let`s Connect{" "}
                <Image
                  src={"/general/whatsapp.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

            
          <div className="lg:hidden flex items-center w-fit h-[72px]   ">
          </div>
        </header>
      </div>
  );
};

export default HeaderNavigations;