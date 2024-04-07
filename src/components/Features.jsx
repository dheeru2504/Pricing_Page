import React from "react";

const cards = [
  {
    id: 1,
    plan: "Basic",
    price: "Free",
    button_lable: "Sign up",
  },
  {
    id: 2,
    plan: "ESSENTIALS",
    price: "$8",
    button_lable: "Sign up",
  },
  {
    id: 3,
    plan: "PROFESSIONAL",
    price: "$12",
    button_lable: "Sign up",
  },
  {
    id: 4,
    plan: "TEAMS",
    price: "$16",
    button_lable: "Sign up",
  },
  {
    id: 5,
    plan: "ENTERPRISE",
    price: "-",
    button_lable: "Contact Sales",
  },
];
const Features = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-4 py-24 mx-auto flex flex-row flex-wrap  ">
          <div class="mt-4 mb-4  mr-3 w-80 ">
            <div class="h-full p-6 text-start rounded-lg border-2 border-gray-300   relative overflow-hidden">
              <h2 class="text-2xl font-semibold  pb-3 title-font  font-medium">
                Features
              </h2>
              <h1 class="text-3xl font-semibold text-slate-800 pb-4   border-gray-200">
                Features by plan
              </h1>

              <p>
                Fint the subscription that makes the most sense for you or your
                team
              </p>
            </div>
          </div>

          {cards.map((card) => (
            <div class="mt-4 mb-4 mr-3 w-52 ">
              <div
                key={card.id}
                class="h-full p-6 text-center rounded-lg border-2 border-gray-300   relative overflow-hidden"
              >
                <h2 class="text-2xl font-semibold  pb-3 title-font  font-medium">
                  {card.plan}
                </h2>
                <h1 class="text-5xl font-semibold text-slate-800 pb-4   border-gray-200">
                  {card.price}
                </h1>

                <button class="  font-semibold items-center mt-auto     py-2 px-4 w-full focus:outline-none text-sky-500  border border-blue-500 hover:bg-blue-500 hover:text-white rounded">
                  {card.button_lable}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
