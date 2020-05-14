
import PropTypes from 'prop-types';

const IconReset = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 90.7 90.7"
      version="1"
      viewBox="0 0 90.7 90.7"
      xmlSpace="preserve"
    >
      <path
        d="M67.2 57.3L67.2 29.6 43.2 15.7 19.2 29.6 19.2 57.3 43.2 71.2z"
        className="st0"
        fill={color}
      ></path>
      <path d="M54.6 41.6l1 12v.2c-.1 1.3-1.2 2.3-2.6 2.3l-18.8-.7c-2.2-.1-3.9-1.9-3.8-4.1l.7-18.8c.1-1.4 1.2-2.4 2.6-2.4l5.9.1c.9 0 1.6-.9 1.4-1.8-.2-.7-.8-1.2-1.5-1.2l-8.5-.4c-2.2 0-4 1.8-4 4V55c0 2.2 1.8 4 4 4h25.7c1.3 0 2.4-1.1 2.5-2.4v-.2l-1.9-15.1c-.1-.8-.5-1.4-1.3-1.4-1-.1-1.5.7-1.4 1.7z"></path>
      <path d="M39.5 33.2l.2-8.7c0-.3.4-.5.6-.3l5.9 4.3c.3.3.3.8 0 1l-6.1 4c-.2.3-.6 0-.6-.3z"></path>
    </svg>

  );
}

IconReset.propTypes = {
  color: PropTypes.string.isRequired
};

export default IconReset;
