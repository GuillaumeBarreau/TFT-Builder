import PropTypes from 'prop-types';

const IconHexagone = ({ color }) => {
  return (
    <svg
      width={70}
      viewBox="0 0 193.9 223.7"
      overflow="visible"
      fill={color}
    >
      <path d="M145.48 27.75C103.35 3.45 96.99-.16 96.59.01c-.25.13-11.02 6.33-23.94 13.78S38.1 33.72 24.59 41.53L0 55.7v112.12l22.38 12.92c62.25 35.93 73.38 42.36 73.98 42.63l.65.31 15.74-9.06c8.66-4.97 30.46-17.56 48.45-27.93l32.73-18.89V55.7l-48.45-27.95z" />
    </svg>
  )
}

IconHexagone.propTypes = {
  color: PropTypes.string
}

export default IconHexagone
