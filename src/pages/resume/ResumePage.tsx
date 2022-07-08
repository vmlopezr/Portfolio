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
    title: 'Software Developer',
    dates: 'August 2020 - Present',
    location: 'Houston, Texas',
    company: 'Datagration',
    bullets: [
      `Architected the web application using existing RESTful API and set standards for the project. Updated endpoint as necessary to add new features to existing funcitonality. (React, Typescript, C#)`,
      `Worked in tandem with engineers and backend team to successfully deliver visualization for production forecasting. (React, Typescript)`,
      `Built a custom drag and drop builder to create and visualize flows to automate activities. (React, Typescript)`,
      `Implemented feature to create configurations for data ingestion into platform. (React, Typescript)`,
      `Created text editor using Monaco Editor and implemented key features such as auto-complete, signature and hover documentations for custom scripting language. (React, Typescript)`,
      `Developed a custom spread-sheet component using React-Window that can handle up to 500k x 500k rows and columns. (React, Typescript)`
    ],
  },
  {
    title: 'Controls Engineering Co-op',
    dates: 'August 2018 - May 2019',
    location: 'Tulsa, Oklahoma',
    company: 'Summit ESP, A Halliburton Company',
    bullets: [
      'Developed a kivy python front-end application for test, validation and logging of up to 32 pressure ' +
        'transducers reducing test completion time by 90% down to 1 hour. (Python, SQLite)',
      'Created a a raspberry pi modbus server to store live pressure transducer data retrieved via SPI peripheral. (Python)',
      'Constructed a batch script that configures ethernet routers via SSH protocol to establish ethernet ' +
        'communications in multi-drive well-sites. (Batch Scriping, Teraterm)',
      'Built ladder logic on an Idec FC6A+ PLC to enable ModbusTCP in Summit Products for use in ethernet networks. (Ladder Logic)',
      'Redesigned the existing LabVIEW Product test to replace serial communications with ModbusTCP. Thus allowing ' +
        'testing of the new company instrument and data logging to SQLite databases. (LabView, SQLite)',
    ],
  },
  {
    title: 'Electrical Engineering Co-op',
    dates: 'May 2019 - August 2019',
    location: 'Houston, Texas',
    company: 'Lyondellbasell, Houston Refinery',
    bullets: [
      'Developed excel dashboard depicting the site electrical subs system, for capital and long term planning.',
      'Discovered two critical 12KV motors are susceptible to insulation failure by identifying increasing negative polarity trend in Partial Discharge monitoring data.',
    ],
  },
  {
    title: 'Instrumentation & Electrical Engineering Co-op',
    dates: 'May 2018 - August 2018',
    location: 'Clinton, Iowa',
    company: 'Lyondellbasell, Clinton Complex',
    bullets: [
      'Identified relieving air regulators in condensate pot service as failure points during low ambient temperatures in winter. Established project to replace relieving regulators in similar service with non-relieving versions.',
      'Discovered 38 pressure instruments on the Plant Deluge System have no preventative maintenance. Partnered with local fire safety service company to establish function testing procedure to include in the semiannual testing. ',
    ],
  },
  {
    title: 'Instrumentation & Electrical Engineering Co-op',
    dates: 'Jan 2017 - August 2017',
    location: 'Pasadena, Texas',
    company: 'Lyondellbasell: Bayport Polymers',
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
