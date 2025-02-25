
import PropTypes from 'prop-types';

function Button({ children, onClick, isActive }) {
    return <button
        onClick={() => onClick && onClick()}
        className={`${isActive
            ? 'bg-pulsed-button '
            : 'bg-unpulsed-button  '
            } px-14 py-2 rounded-[20px] border-solid border-1 cursor-pointer shadow-[0px_6px_5px_rgba(55,55,55,0.20)] backdrop-blur-md border-[rgba(255,255,255,0.4)]`}
    >
        {children}

    </button>
}

// Agregar validación de propiedades
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
};

export default Button;  
