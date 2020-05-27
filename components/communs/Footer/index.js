import PropTypes from 'prop-types';
import styled from './styled.module.css';

export const Footer = () => {

  return (
    <footer className={styled.mainContent}>
      <p>
        Made with love &hearts; &hearts; &hearts; - Repository{' '}
        <a className={styled.mainContent_link} target="_blank" href="https://github.com/GuillaumeBarreau/TFT-Builder">
          GitHub
				</a>
      </p>
    </footer>
  );
};
