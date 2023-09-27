import PropTypes from 'prop-types';
import './Button.css'

export function Button({ onClick }) {
    return (
        <button type="button" className="button" onClick={onClick}>
            Load more
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
};