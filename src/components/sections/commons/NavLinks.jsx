import Link from "next/link";
import React from "react";

const NavLinks = ({ links, handleNavLinksClick }) => {
  return (
    <ul>
      {links?.map((linkGroup, index) => {
        return (
          <ul class="flex ">
            {linkGroup?.map((item) => {
              return !item.dropItems ? (
                <li
                  className="mt-0 relative border"
                  onClick={handleNavLinksClick}>
                  <Link
                    href="#"
                    class="h-full  flex items-center p-2 text-sm    text-gray-600   rounded-lg dark:text-white  dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap text-sm">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ) : (
                <li
                  className="relative px-[0.3rem] py-[0.5rem] text-gray-600   rounded-lg "
                  onMouseEnter={(e) => {
                    e.currentTarget.lastChild.classList.remove("hidden");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.lastChild.classList.add("hidden");
                  }}
                  onClick={handleNavLinksClick}>
                  <button
                    type="button"
                    class="flex items-center w-full  text-[0.9rem]   text-gray-600 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example">
                    <span
                      class="flex-1  text-left whitespace-nowrap"
                      sidebar-toggle-item>
                      {item.name}
                    </span>
                    <svg
                      sidebar-toggle-item
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example"
                    className="hidden absolute bg-white left-0 w-[200px] top-[2.5rem] rounded-lg overflow-hidden  shadow-md">
                    {item.dropItems.map((dropItem) => {
                      return (
                        <li
                          onClick={handleNavLinksClick}
                          className="border border-solid border-gray-100">
                          <Link
                            href={dropItem.path}
                            className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group  dark:text-white dark:hover:bg-gray-700">
                            {dropItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        );
      })}
    </ul>
  );
};

export default NavLinks;
