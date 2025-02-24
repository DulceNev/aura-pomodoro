import PropTypes from 'prop-types';

import '../../global.css'
import 'boxicons'
import { Tooltip } from 'react-tooltip';
function IconButton({ icon = "home", onClick, size = "md", type = "solid", className, isActive = false }) {
    return (
        <>
            <button data-tooltip-id={icon} data-tooltip-place="top">
                <box-icon
                    onClick={onClick}
                    name={icon}
                    size={size}
                    type={type}
                    className={`rounded-full fill-[var(--primary)] hover:bg-[var(--primary)] cursor-pointer hover:fill-white transition-colors duration-300 ease-in-out active:scale-95 ${className} ${isActive ? 'fill-white bg-[var(--primary)]' : ''}`}>
                </box-icon>
            </button>

            <Tooltip
                id={icon}
                delayShow={100}
                style={{
                    backgroundColor: 'var(--tooltip-color)',
                    fontSize: '20px',
                    color: 'white',
                    padding: '2px 20px',
                    borderRadius: '8px',
                }}
            >
                {icon}
            </Tooltip>
        </>
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
