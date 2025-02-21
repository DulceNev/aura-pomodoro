
import PropTypes from 'prop-types';

function Button({ children, onClick, isActive }) {
    return <button
        onClick={() => onClick && onClick()}
        className={`${isActive
            ? 'bg-secondary-content/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
            : 'bg-secondary/30 backdrop-blur-md border-[rgba(255,255,255,0.4)]'
            } px-14 py-2 rounded-[20px] border-solid border-1 cursor-pointer shadow-[0_6px_4px_#8c27514c]`}
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
