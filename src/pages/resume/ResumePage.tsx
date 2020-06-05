import React, { memo } from 'react';
import './ResumePage.scss';
interface position {
  title: string;
  dates: string;
  company: string;
  location: string;
  bullets: string[];
}
const Experience: position[] = [
  {
    title: 'Controls Engineering Co-op',
    dates: 'August 2018 - May 2019',
    location: 'Tulsa, Oklahoma',
    company: 'Summit ESP, A Halliburton Company',
    bullets: [
      'Redesigned the existing LabVIEW Product test to implement ModbusTCP communications with the new company instrument and record test data to SQLite databases. (LabView)',
      'Implemented existing LabVIEW automatic test as a  kivy python application for test and validation of up to 32 pressure' +
        'transducers through various pressure and temperature setpoints. Reduced test completion' +
        'time by 90% down to 1 hour. (Python)',
      'Constructed a batch script to configure ethernet routers via SSH protocol to enable ethernet' +
        'communications in multi-drive well-sites. (Batch Scriping, Teraterm)',
      'Built ladder logic on an Idec FC6A+ PLC to enable ModbusTCP in Summit Products for  use in  ethernet networks.',
    ],
  },
  {
    title: 'Electrical Engineering Co-op',
    dates: 'May 2019 - August 2019',
    location: 'Houston, Texas',
    company: 'Lyondellbasell',
    bullets: [
      'Discovered two critical 12KV motors are susceptible to insulation failure by identifying increasing negative polarity trend in Partial Discharge monitoring data.',
      'Verified electrical feasibility for installation of vibration monitor on a Propylene-Propane pump. Redesigned control circuit to trip pump on high vibration setpoint and finalized project package to issue for approval.',
    ],
  },
  {
    title: 'Instrumentation & Electrical Engineering Co-op',
    dates: 'May 2018 - August 2018',
    location: 'Clinton, Iowa',
    company: 'Lyondellbasell',
    bullets: [
      'Identified relieving air regulators in condensate pot service as failure points during low ambient temperatures in winter. Established project to replace relieving regulators in similar service with non-relieving versions.',
      'Discovered 38 pressure instruments on the Plant Deluge System have no preventative maintenance. Partnered with local fire safety service company to establish function testing procedure to include in the semiannual testing. ',
    ],
  },
  {
    title: 'Instrumentation & Electrical Engineering Co-op',
    dates: 'Jan 2017 - August 2017',
    location: 'Pasadena, Texas',
    company: 'Lyondellbasell',
    bullets: [
      'Identified critical interlocks and designed functional testing procedures to validate the Safety Instrumented System of the plant. ',
      'Collaborated with engineers, operations and vendors in order to certify instrument specifications, set up spares for essential instruments, and updated the Bill of Materials for the associated units.',
    ],
  },
];
const ResumePage = memo(() => {
  return (
    <div>
      {Experience.map((position, index) => {
        return (
          <div className="internship" key={position.dates}>
            <h1 className="position">{position.title}</h1>
            <h2 className="company">{position.company}</h2>
            <div className="position-info">
              <h3>{position.location}</h3>
              <h3>{position.dates}</h3>
            </div>
            <ul>
              {position.bullets.map((bullet) => {
                return <li key={bullet}>{bullet}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
});
ResumePage.displayName = 'ResumePage';
export default ResumePage;
