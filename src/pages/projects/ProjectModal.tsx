import React, { memo } from 'react';
import { Project } from './Projects';
import './ProjectModal.scss';
interface ModalProps {
  id: number;
  project: Project;
  show: boolean;
  hideModal(id: number): void;
}

const ProjectModal = memo(
  (props: ModalProps) => {
    const showModal = props.show ? 'display-block' : 'display-none';
    const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      props.hideModal(props.id);
      event.stopPropagation();
      event.preventDefault();
    };
    return (
      <div className={'modal ' + showModal}>
        <div className="overlay" onClick={onClick} />
        <section className={'modal-main ' + showModal}>
          <div
            className="video-container"
            style={{ display: props.show ? 'block' : 'none' }}
          >
            <video controls>
              <source src={props.project.videolink} type="video/mp4" />
            </video>
          </div>
          <div className="project-information">
            <h1>{props.project.title}</h1>
            <div className="about-project">
              <div className="tech-container">
                {props.project.technologies.map((value, index) => {
                  return (
                    <div key={'tech' + index} className="tech-obj">
                      {value}
                    </div>
                  );
                })}
              </div>
              {props.project.description.map((descValue) => {
                return <p key={descValue}>{descValue}</p>;
              })}
            </div>
            <div className="github-links">
              {props.project.links.map((link) => {
                return (
                  <a
                    key={link.link}
                    href={link.link}
                    style={{ display: props.show ? 'block' : 'none' }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.show === nextProps.show
);
ProjectModal.displayName = 'ProjectModal';
export default ProjectModal;
