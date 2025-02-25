import PropTypes from 'prop-types';

import '../../global.css'
import 'boxicons'

function IconButton({ icon = "home", onClick, size = "md", type = "solid", className, isActive = false, hasTooltip = false, tooltipText = "", tooltipPlace = "top" }) {
    const getTooltipPlace = (place) => {
        const places = {
            "bottom": "tooltip-bottom",
            "top": "tooltip-top",
            "left": "tooltip-left",
            "right": "tooltip-right",
        }
        return places[place] || "";

    }
    return (
        <>
            <button className={` ${hasTooltip ? `tooltip  tooltip-primary ${getTooltipPlace(tooltipPlace)}` : ''}`} data-tip={tooltipText} >
                <box-icon
                    onClick={onClick}
                    name={icon}
                    size={size}
                    type={type}
                    className={`rounded-full fill-primary hover:bg-primary cursor-pointer hover:fill-white transition-colors duration-300 ease-in-out active:scale-95 ${className} ${isActive ? 'fill-white bg-primary' : ''}`}>
                </box-icon>
            </button>

            {/* <Tooltip
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
            </Tooltip> */}
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
    hasTooltip: PropTypes.bool,
    tooltipText: PropTypes.string,
    tooltipPlace: PropTypes.string,
};
export default IconButton;
