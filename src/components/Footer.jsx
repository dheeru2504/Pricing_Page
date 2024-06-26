import React from "react";

const Links = [
  {
    id: 1,
    head: "About",
    items: [" About Calendly", "Contact Us", "Newsroom", "Careers", "Security"],
  },
  {
    id: 2,
    head: "Solutions",
    items: [
      " customer Success",
      "Sales",
      "Recruiting",
      "Information Technology",
      "Marketing",
    ],
  },
  {
    id: 3,
    head: " Popular Features",
    items: [
      " Embed Calendly",
      "Availability",
      " Sending Notifications",
      " Using Calendly Mobile",
      "Security",
    ],
  },
  {
    id: 4,
    head: "Support",
    items: ["Help Center", "Video Tutorial"],
  },
  {
    id: 5,
    head: " Add-On",
    items: ["Download for Chrome", "Download for Firefox  "],
  },
  {
    id: 6,
    head: "Developers",
    items: ["Developer Tools"],
  },
];

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto  md:items-center lg:items-start row  ">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left  col-3">
            <a class="flex text-3xl title-font font-medium  md:justify-start  text-gray-900">
              Easy
            </a>
            <p>
              <span class="flex text-3xl title-font font-medium items-center md:justify-start justify-center text-blue-500">
                Ahead
              </span>
            </p>
            <p class="mt-2 text-sm text-gray-500">
              We take the work out of connecting with others so you can
              accomplish more.
            </p>

            <div class=" ">
              <div class="py-4">
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-start sm:justify-start">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-8 flex flex-wrap flex-row">
            {Links.map((link) => (
              <div key={link.id} class="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                  {link.head}
                </h2>
                <nav class="list-none mb-10 font-semibold">
                  {link.items.map((item) => (
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">{item}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
