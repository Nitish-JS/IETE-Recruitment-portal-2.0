import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
<<<<<<< HEAD
import './carousel.css'
export default function AlternateTimeline() {
  return (
<Timeline position="alternate" className='Timeline'>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className="TimelineDot"/>
          <TimelineConnector className='TimelineConnector' />
        </TimelineSeparator>
        <TimelineContent >Round 1 </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator >
          <TimelineDot className="TimelineDot" />
          <TimelineConnector className='TimelineConnector' />
=======

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Round 1 </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
        </TimelineSeparator>
        <TimelineContent>Round 2</TimelineContent>
      </TimelineItem>
      <TimelineItem>
<<<<<<< HEAD
        <TimelineSeparator >
          <TimelineDot className="TimelineDot" />
=======
        <TimelineSeparator>
          <TimelineDot />
>>>>>>> 747870b38515ef1779bcf46fe11f813705211a50
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>Round 3</TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}