import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const faqs = [
  {
    key: 1,
    ques: "What happens at the end of my trial?",
    ans: "",
  },
  {
    key: 2,
    ques: "Can we try Calendly with multiple users?",
    ans: "",
  },
  {
    key: 3,
    ques: "What does the renewal process look like?",
    ans: "",
  },
  {
    key: 4,
    ques: "How do I upgrade or downgrade?",
    ans: "",
  },
  {
    key: 5,
    ques: "We're a non- profit organisation, is there special pricing available?",
    ans: "",
  },
  {
    key: 6,
    ques: "What payments method do you accept?",
    ans: "",
  },
];
const Faq = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto row   px-5 py-14    ">
          <div className="text-center  col-4">
            <div className="text-4xl font-bold text-slate-800">Frequently</div>
            <div className="text-4xl font-bold text-slate-800">Asked</div>
            <div className="text-4xl font-bold text-slate-800">Questions</div>
          </div>
          <div className="col-8">
            {faqs.map((item) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#1374f8" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="text-xl font-semibold text-slate-800"
                >
                  {item.ques}
                </AccordionSummary>
                <AccordionDetails>{item.ans}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
