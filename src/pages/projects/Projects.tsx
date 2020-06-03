import React, { memo } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.scss';

export interface Project {
  title: string;
  description: string;
  img: string;
  technologies: string;
  githubLink: string;
  demoLink: string;
}
const projects: Project[] = [
  {
    title: 'WS2812 Modular Display',
    description:
      'An embedded application using a ESP32 Microcontroller to control WS2812 LED Matrices via phone application.',
    img: '',
    technologies:
      'Phone application is written with React Native. Communicates with the microcontroller via websockets ',
    githubLink: 'https://github.com/vmlopezr/modular-ws2812-display-app',
    demoLink: '',
  },
  {
    title: 'Raspberry Pi Dashcam',
    description:
      'A application controlling UVC compatible USB webcams via web browser on a Raspberry Pi Access Point.',
    img: '',
    technologies: `A full stack application using a Node JS backend to serve recorded videos, and stream live webcam feed. 
    A sqlite database is used to store camera settings as well as error logs. The website is written with Ionic framework.`,
    githubLink: 'https://github.com/vmlopezr/rpi-dashcam',
    demoLink: 'https://vmlopezr.github.io',
  },
  {
    title: 'OWI Robot Arm Model',
    description:
      'A three.js model of a OWI Robot Arm. Written to help visualize forward kinematics',
    img: '',
    technologies: 'Phone application is written using React Native.',
    githubLink: 'https://github.com/vmlopezr/owi-arm-model',
    demoLink: 'https://vmlopezr.github.io/owi-arm-model',
  },
  {
    title: 'OWI Robot Arm Color Sorting',
    description:
      'A robotics project controlling a OWI Robot arm to place colored objects based on the position of QR codes.',
    img: '',
    technologies:
      'The robot is controlled with a STM32F4 microcontroller receiving position data from python OpenCV script via serial connection.',
    githubLink: 'https://github.com/vmlopezr/owi-arm-model',
    demoLink: '',
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
            <span className="button-content" tabIndex={-1}>
              <h2>{project.title}</h2>
              <ProjectModal
                id={id}
                project={project}
                show={modalState[id]}
                hideModal={hideModal}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
});
Projects.displayName = 'Projects';
export default Projects;
