import PropTypes from 'prop-types';
import { 
  ButtonMore,
  Span,
  } from "./style.jsx";

const Button = ({ onClick }) => {
  return (
    <ButtonMore onClick={onClick}><Span>Load More</Span></ButtonMore>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,      
}

export default Button;