import React from "react"
import PropTypes from "prop-types";
import { MdClose, MdChevronRight } from "react-icons/md";
import Image from "../image";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "@/utils/types";
import ButtonLink from "./button-link";
import { useLockBodyScroll } from "@/utils/hooks";
import { getButtonAppearance } from "@/utils/button";
import CustomLink from "./custom-link";
import { Link } from "gatsby"
import { localizePath } from "@/utils/localize"

const MobileNavMenu = ({ navbar, closeSelf, pageContext }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6">
      <div className="container flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center">
          {/* Company logo */}
          <Link
              to={localizePath({ ...pageContext, isPreview: false, slug: "" })}
            >
            <Image style={{ width: "150px" }} media={navbar.logo} className="h-8 object-contain" />
          </Link>
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10">
            {navbar.links.map((navLink) => (
              <li key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="hover:text-gray-900 py-6 flex flex-row justify-between items-center">
                    <span>{navLink.text}</span>
                    <MdChevronRight className="h-8 w-auto" />
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
};

export default MobileNavMenu;
