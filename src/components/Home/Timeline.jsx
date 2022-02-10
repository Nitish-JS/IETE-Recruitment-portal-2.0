// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import './carousel.css'
// export default function AlternateTimeline() {
//   return (
// <Timeline position="alternate" className='Timeline'>
//       <TimelineItem>
//         <TimelineSeparator >
//           <TimelineDot className="TimelineDot"/>
//           <TimelineConnector className='TimelineConnector' />
//         </TimelineSeparator>
//         <TimelineContent >Round 1 </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator >
//           <TimelineDot className="TimelineDot" />
//           <TimelineConnector className='TimelineConnector' />
//         </TimelineSeparator>
//         <TimelineContent>Round 2</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator >
//           <TimelineDot className="TimelineDot" />
//           {/* <TimelineConnector /> */}
//         </TimelineSeparator>
//         <TimelineContent>Round 3</TimelineContent>
//       </TimelineItem>

//     </Timeline>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepContent from "@mui/material/StepContent";

const steps = [
  {
    label: "Round 1",
    description: "14/02/2022",
  },
  {
    label: "Round 1",
    description: "14/02/2022",
  },
  {
    label: "Round 1",
    description: "14/02/2022",
  },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }} className="Timeline">
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]} >
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.label}
            </StepButton>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
