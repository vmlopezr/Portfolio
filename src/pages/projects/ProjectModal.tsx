import React, { memo } from 'react';
import './ProjectModal.scss';
import { Project } from './Projects';

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
          <div className="description">
            <h2>{props.project.title}</h2>
            <p>{props.project.description}</p>
            <p>{props.project.technologies}</p>
            <a href={props.project.githubLink}>View Code</a>
            <br />
            <a href={props.project.demoLink}>{props.project.demoLabel}</a>
          </div>
        </section>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.show === nextProps.show
);
ProjectModal.displayName = 'ProjectModal';
export default ProjectModal;
