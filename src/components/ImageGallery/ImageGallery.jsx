import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { 
  Ul
  } from "./style.jsx";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Ul>
      {images.map(image => {
          return (<ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />)
        })
      }
    </Ul>
  )
}

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
  })
)      
}

export default ImageGallery;