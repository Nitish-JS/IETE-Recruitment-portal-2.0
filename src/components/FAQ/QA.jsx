import React, { useState } from "react";
import { Data } from "./data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMoreOutlined } from "@material-ui/icons";
function QA() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="FAQ" > 
        <h1 className="FAQ-heading">Frequently Asked Questions</h1>
      <div className="FAQ-accordion">
        {Data.map((item) => {
          const { id, question, answer } = item;
          return (
            <Accordion
              expanded={expanded === id}
              key={id}
              onChange={handleChange(id)}
              disableGutters={true}
            >
              <AccordionSummary expandIcon={<ExpandMoreOutlined /> }>
                <Typography className="FAQ-question">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='FAQ-answers'>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default QA;
