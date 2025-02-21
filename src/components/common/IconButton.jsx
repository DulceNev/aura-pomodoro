import PropTypes from 'prop-types';
import 'boxicons'
function IconButton({ icon = "home", onClick, size = "md", type = "solid", className, isActive = false }) {
    return (
        <box-icon
            onClick={onClick}
            name={icon}
            size={size}
            type={type}
            className={`rounded-full fill-primary hover:bg-primary cursor-pointer hover:fill-white transition-colors duration-300 ease-in-out active:scale-95 ${className} ${isActive ? 'fill-white bg-primary' : ''}`}>
        </box-icon>
    );
}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    isActive: PropTypes.bool,
};
export default IconButton;
