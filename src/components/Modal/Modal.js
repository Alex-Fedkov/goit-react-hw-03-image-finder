import PropTypes from 'prop-types';
import { Backdrop, Img } from "./style";

const Modal = ({ image, onClose }) => {
  const { tags: alt, largeImageURL: src } = image;

  const onBackdrop = event => {
    if (event.target.tagName === "DIV" ) {
      onClose();
    }
  }

  return (
    <Backdrop onClick={onBackdrop}>
      <Img src={src} alt={alt} />
    </Backdrop>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
    }) 
}
export default Modal;