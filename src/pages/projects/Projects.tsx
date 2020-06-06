import React, { memo } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.scss';
import modularled from '../../images/modular-led.png';
import owimodel from '../../images/owi-arm-model.png';
import owisorting from '../../images/owi-arm-sorting.png';
import rpidashcam from '../../images/rpi-dashcam.png';
import modularledvideo from '../../images/modular-led.mp4';
import roboticproject from '../../images/robotics-project.mp4';
import owimodelvideo from '../../images/owi-arm-model.mp4';
import rpidashcamvideo from '../../images/rpi-dashcam.mp4';
export interface Project {
  title: string;
  description: string[];
  img: string;
  videolink: string;
  technologies: string[];
  links: sourcefiles[];
}
interface sourcefiles {
  link: string;
  label: string;
}
const projects: Project[] = [
  {
    title: 'WS2812 Modular Display',
    description: [
      'An embedded application that controls a large matrix of up to 1024 WS2812 leds.',
      'The project uses a ESP32 microcontroller to ' +
        'drive an led display and runs a websocket server ' +
        'that receives data from a phone application.',
      ' The display can be updated real-time and ' +
        'a sequence of frames can be set to loop through. The ESP32 interfaces with an SD card breakout ' +
        'board to save frame data and store default sequences to display on start up.',
    ],
    img: modularled,
    videolink: modularledvideo,
    // prettier-ignore
    technologies: [ 'Expo CLI', 'React Native', 'ESP32', 'C++', 'WebSockets' ],
    links: [
      {
        label: 'Back End Source',
        link: 'https://github.com/vmlopezr/modular-ws2812-display-esp32',
      },
      {
        label: 'Front End Source',
        link: 'https://github.com/vmlopezr/modular-ws2812-display-app',
      },
      {
        label: 'View Expo',
        link: 'https://exp.host/@vmlopez336/WS2812DisplayESP32',
      },
    ],
  },
  {
    title: 'Raspberry Pi Dashcam',
    description: [
      'A web application controlling UVC compatible USB webcams on ' +
        'a Raspberry Pi. A RESTful Node.js server runs a python ' +
        'program that records to the file system and streams ' +
        'live feed to the application.',
      'The application is served from a Raspberry Pi that is configured as a' +
        ' wireless Access Point. This application is available as a Docker image.',
    ],
    img: rpidashcam,
    videolink: rpidashcamvideo,
    // prettier-ignore
    technologies: [ 
      'Docker', 'Angular', 'Ionic', 'Node', 'RESTful',
      'SQLite', 'HTML5', 'SCSS', 'Python3', 'GStreamer',
    ],
    links: [
      {
        label: 'Back End Source',
        link: 'https://github.com/vmlopezr/rpi-dashcam',
      },
      {
        label: 'Front End Source',
        link: 'https://github.com/vmlopezr/rpi-dashcam-front-end',
      },
      {
        label: 'View Demo',
        link: 'https://vmlopezr.github.io/rpi-dashcam-front-end',
      },
    ],
  },
  {
    title: 'OWI Robot Arm Model',
    description: [
      'A three.js model of a OWI Robot Arm. Written to help visualize forward' +
        ' kinematics. The model allows to move the arm based on its joint angles.' +
        ' Different positions can be set to animate the arm moving through the positions.',
    ],
    img: owimodel,
    videolink: owimodelvideo,
    // prettier-ignore
    technologies: ['React.js', 'three.js', 'SCSS', 'Docker'],
    links: [
      {
        label: 'View Source',
        link: 'https://github.com/vmlopezr/owi-arm-model',
      },
      {
        label: 'View Demo',
        link: 'https://vmlopezr.github.io/owi-arm-model',
      },
    ],
  },
  {
    title: 'OWI Robot Arm Color Sorting',
    description: [
      'A robotics project controlling a OWI Robot Arm to place colored objects ' +
        'based on the position of QR codes.',
      ' A STM32F4 microcontroller is used to ' +
        'drive small DC motors. It receives position data via Direct Memory Access ' +
        'on its USART peripheral from a the OpenCV python program accessing a USB webcam.',
    ],
    img: owisorting,
    videolink: roboticproject,
    // prettier-ignore
    technologies: [ 'Python3', 'OpenCV', 'STM32', 'DMA', 'USART'],
    links: [
      {
        label: 'View Source',
        link: 'https://github.com/vmlopezr/owi-arm-model',
      },
    ],
  },
];
const modalInitialState = [false, false, false, false];

const Projects = memo(() => {
  const [modalState, setModalState] = React.useState([...modalInitialState]);
  const [disablePointer, setPointerEv] = React.useState(false);
  const showModal = (id: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const state = [...modalState];
    state[id] = true;
    setModalState(state);
    setPointerEv(true);
    event.currentTarget.blur();
  };
  const hideModal = (id: number) => {
    const state = [...modalState];
    state[id] = false;
    setModalState(state);
    setPointerEv(false);
  };
  return (
    <div className="projectsContainer">
      {projects.map((project, id) => {
        return (
          <button
            type="button"
            className="ModalItem"
            key={project.title}
            onClick={showModal(id)}
            tabIndex={0}
            style={{
              pointerEvents: disablePointer ? 'none' : 'auto',
            }}
          >
            <div
              data-content={project.title}
              className="button-content"
              tabIndex={-1}
            >
              <img src={project.img} alt={''} />
              <ProjectModal
                id={id}
                project={project}
                show={modalState[id]}
                hideModal={hideModal}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
});
Projects.displayName = 'Projects';
export default Projects;
