import PropTypes from 'prop-types';

const IconDelete = (color) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			fill={color}
			version="1.1"
			viewBox="0 0 27.965 27.965"
			xmlSpace="preserve"
		>
			<path d="M13.98 0C6.259 0 0 6.261 0 13.983c0 7.721 6.259 13.982 13.98 13.982 7.725 0 13.985-6.262 13.985-13.982C27.965 6.261 21.705 0 13.98 0zm6.012 17.769l-2.227 2.224s-3.523-3.78-3.786-3.78c-.259 0-3.783 3.78-3.783 3.78l-2.228-2.224s3.784-3.472 3.784-3.781c0-.314-3.784-3.787-3.784-3.787l2.228-2.229s3.553 3.782 3.783 3.782c.232 0 3.786-3.782 3.786-3.782l2.227 2.229s-3.785 3.523-3.785 3.787c0 .251 3.785 3.781 3.785 3.781z"></path>
		</svg>
	);
}

IconDelete.propTypes = {
	color: PropTypes.string.isRequired
};

export default IconDelete;
