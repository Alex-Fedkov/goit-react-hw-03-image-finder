import PropTypes from 'prop-types';
import { 
  Li,
  Img,
  } from "./style.jsx";

const ImageGalleryItem = ({ image, onImageClick }) => {
  const { id, tags: alt, previewURL: src } = image;

  return (
    <Li>
      <Img src={src} alt={alt} onClick={() => onImageClick(id)} />
    </Li>
  )
};

ImageGalleryItem.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
          id: PropTypes.number.isRequired,
          previewURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
    }) 
}

export default ImageGalleryItem;