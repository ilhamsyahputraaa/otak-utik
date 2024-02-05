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
    ? "/assets/general/Logo Article.svg"
    : "/assets/general/Logo Header.svg";

    const isActiveLink = (path:String) => {
      return router.pathname === path ? "active-link" : "";
    };
  return (
      <div>
        <header className="header-comp lg:px-20 px-4 py-4 flex items-center justify-between w-full fixed top-0 gap-10 h-[72px] z-50 border-b lg:border-b-0 lg:border-primary shadow-sm lg:rounded-none rounded-md">
          <div className="flex gap-6 items-center lg:border-b w-full h-[72px] border-primary">
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

            <nav className="hidden lg:flex gap-4 text-gray-800">
                <Link
                  href="/"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/") ? "font-bold bg-white shadow-sm" : ""
                  }`}>
                  Home
                </Link>
                <Link
                  href="/product"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/product")
                      ? "font-bold bg-white shadow-sm"
                      : ""
                  }`}>
                  Product
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/contact")
                      ? "font-bold bg-white shadow-sm"
                      : ""
                  }`}>
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/about") ? "font-bold bg-white shadow-sm" : ""
                  }`}>
                  About Us
                </Link>
                <Link
                  href="/article"
                  className={`hover:text-gray-300 rounded-lg px-4 py-2  ${
                    isActiveLink("/article")
                      ? "font-bold bg-white shadow-sm"
                      : ""
                  }`}>
                  Article & News
                </Link>
            </nav>
          </div>

            <div className="hidden lg:flex w-[300px] items-center justify-center lg:border-b h-[72px] border-primary">
              <button
                className="bg-primary text-white hover:bg-navy-700 py-2 px-8 font-regular rounded flex items-center justify-center gap-2 "
                onClick={() => {
                  window.open("https://wa.me/+6282280002797", "_blank");
                }}>
                Let`s Talk{" "}
                <Image
                  src={"/assets/general/whatsapp.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </button>
            </div>
          <div className="lg:hidden flex items-center w-fit h-[72px] border-primary  ">
          </div>
        </header>
      </div>
  );
};

export default HeaderNavigations;