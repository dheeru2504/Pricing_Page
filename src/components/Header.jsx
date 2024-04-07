import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuStyles = {
    transition: "all 0.5s ease-out", // Smooth transition for opacity and visibility
    opacity: isMenuOpen ? "1" : "0", // Control opacity based on menu state
    visibility: isMenuOpen ? "visible" : "hidden", // Control visibility based on menu state
    maxHeight: isMenuOpen ? "100vh" : "0", // Expand to max height when open, collapse when closed
    overflow: "hidden", // Prevents content from spilling during transition
    display: isMenuOpen ? "flex" : "none", // Use flex display when menu is open
    flexDirection: "row", // Ensure items are in a row
    padding: "0.5rem",
  };
  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <div className="flex justify-between flex-row ">
            <a className="flex title-font font-medium items-center text-gray-900  md:mb-0">
              <svg
                style={{ background: "#16aef5" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2  rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Calendly</span>
            </a>

            <div>
              <button
                className="text-gray-800  inline-flex p-3 hover:bg-gray-300 rounded lg:hidden ml-auto hover:text-white outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <nav
            style={isMenuOpen ? menuStyles : {}}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:ml-auto  md:mr-auto flex-wrap items-center text-base justify-center font-bold  lg:flex`}
          >
            <a className="mr-5 hover:text-gray-900">Individuals</a>
            <a className="mr-5 hover:text-gray-900">Teams</a>
            <a className="mr-5 hover:text-gray-900">Enterprise</a>

            <div class="dropdown">
              <button
                class=" dropdown-toggle mr-5"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Product 1
                </a>
                <a class="dropdown-item" href="#">
                  Product 2
                </a>
                <a class="dropdown-item" href="#">
                  Product 3
                </a>
              </div>
            </div>

            <a className="mr-5 hover:text-gray-900">Pricing</a>

            <div class="dropdown">
              <button
                class="  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Resources 1
                </a>
                <a class="dropdown-item" href="#">
                  Resources 2
                </a>
                <a class="dropdown-item" href="#">
                  Resources 3
                </a>
              </div>
            </div>
          </nav>
          <div
            style={isMenuOpen ? menuStyles : {}}
            className={`${isMenuOpen ? "flex" : "hidden"} lg:flex`}
          >
            <a className="mr-5 hover:text-gray-900 font-bold ">Log in</a>

            <button
              style={{ background: "#006bfe" }}
              className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-sky-300 text-white rounded text-base  md:mt-0"
            >
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
