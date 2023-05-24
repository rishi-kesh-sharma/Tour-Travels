import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { logoUrl, nav } from "./../../../data";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import NavLinks from "./NavLinks";
import ToggleNavigation from "./ToggleNavigation";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "antd";
import { FaHamburger } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  // TOGGLE SIDEBAR
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  // HANDLE SCREEN RESIZE
  const handleResize = (e) => {
    if (window.innerWidth >= 1024) return setCurrentDevice("lg");
    if (window.innerWidth < 768) return setCurrentDevice("sm");
    if (window.innerWidth >= 768 && window.innerWidth < 1024)
      return setCurrentDevice("md");
  };

  // HANDLE NAVLINKS CLICK
  const handleNavLinksClick = (e) => {
    setShow(false);
  };

  // HANDLE MENU TOGGLE
  const handleToggle = (e) => {
    setShow(!show);
  };

  // USEEFFECT
  useEffect(() => {
    // LISTENING TO RESIZE EVENT
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <SectionWrapper className="h-[70px] ">
      <Section
        className=" sticky top-0 bg-white shadow-md  h-[70px]"
        style={{ zIndex: 1000 }}>
        <Container className="  flex justify-between items-center h-[70px] gap-[1rem]">
          <a className="" href="/">
            <img src={logoUrl} className="max-w-[100%]" />
          </a>

          {/* nav links */}
          <div className="flex gap-4">
            {currentDevice == "lg" && (
              <NavLinks handleNavLinksClick={handleNavLinksClick} links={nav} />
            )}
          </div>

          {/* call to action buttons */}
          {currentDevice == "lg" && (
            <div className="flex gap-[0.5rem] text-[0.9rem]">
              <Link href={"/auth"} className="flex items-center gap-[0.4rem]">
                <AiOutlineUser />
                Login/Register
              </Link>
              <Button
                href="/book"
                type="link"
                className="bg-primary hover: text-gray-100 hover:bg-white ">
                Book Now
              </Button>
            </div>
          )}
          {(currentDevice == "sm" || currentDevice == "md") && (
            <BiMenu className="text-3xl" onClick={handleToggle} />
          )}
          {show && (currentDevice == "sm" || currentDevice == "md") && (
            <ToggleNavigation
              links={nav[nav.length - 1]}
              handleNavLinksClick={handleNavLinksClick}
              show={show}
              setShow={setShow}
            />
          )}
        </Container>
      </Section>
    </SectionWrapper>
  );
};

export default Navbar;
