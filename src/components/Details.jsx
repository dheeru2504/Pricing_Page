import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const tableData = [
  {
    row: 1,
    data: [
      "Connect to google, office 365, Outlook, and icloud calenders",
      "e",
      "e",
      "e",
      "e",
      "e",
    ],
  },
  {
    row: 2,
    data: [
      "Access Calendly with web, iOS, and Android apps",
      "",
      "e",
      "e",
      "e",
      "e",
    ],
  },
  {
    row: 3,
    data: [
      "Active event types",
      "1",
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "Unlimited",
    ],
  },
  {
    row: 4,
    data: [
      "Create unlimited one-on-one events",
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "Unlimited",
    ],
  },
  {
    row: 5,
    data: [
      "Creating meeting polls",
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "Unlimited",
    ],
  },
  {
    row: 6,
    data: ["Create one-off meetings", "-", "-", "e", "e", "e"],
  },
];

const SVG = () => (
  <div className="flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6  "
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
);
const Details = () => {
  return (
    <>
      {/* pricing details */}

      <section className="text-gray-600 body-font">
        <div className="container  py-24 mx-auto">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#1374f8" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-xl  font-semibold"
              style={{ color: "#1374f8" }}
            >
              Core Features
            </AccordionSummary>
            <AccordionDetails>
              <div className="  w-full mx-auto overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead className="">
                    <tr>
                      <th
                        className="border-2  py-3 w-72 text-sm font-semibold title-font text-center tracking-wider   rounded-tl rounded-bl "
                        style={{ color: "#1a3e5f" }}
                      >
                        Calender Connections per person
                      </th>
                      <th className="  border-2   text-center py-3 title-font tracking-wider font-medium text-gray-900 text-sm  ">
                        1
                      </th>
                      <th className="  border-2  py-3 text-center title-font tracking-wider font-medium text-gray-900 text-sm  ">
                        2
                      </th>
                      <th className="  border-2  py-3 text-center title-font tracking-wider font-medium text-gray-900 text-sm  ">
                        6
                      </th>
                      <th className="  border-2  py-3 text-center title-font tracking-wider font-medium text-gray-900 text-sm  ">
                        6
                      </th>
                      <th className="  border-2  py-3 text-center title-font tracking-wider font-medium text-gray-900 text-sm  ">
                        6
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((rows) => (
                      <tr key={rows.row}>
                        {rows.data.map((item) => (
                          <td
                            className="text-center border-2 border-gray-100   py-3 text-sm font-semibold rounded-5xl"
                            style={{ color: "#1a3e5f" }}
                          >
                            {item === "e" ? <SVG /> : item}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#1374f8" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-xl text-blue-400 font-semibold"
              style={{ color: "#1374f8" }}
            >
              Teams
            </AccordionSummary>
            <AccordionDetails>Team details</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#1374f8" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-xl text-blue-400 font-semibold"
              style={{ color: "#1374f8" }}
            >
              Customisations
            </AccordionSummary>
            <AccordionDetails>Customisations details</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#1374f8" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-xl text-blue-400 font-semibold"
              style={{ color: "#1374f8" }}
            >
              Integrations
            </AccordionSummary>
            <AccordionDetails>Integrations details</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#1374f8" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-xl text-blue-400 font-semibold"
              style={{ color: "#1374f8" }}
            >
              Business Support
            </AccordionSummary>
            <AccordionDetails>Business details</AccordionDetails>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Details;
