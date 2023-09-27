import PropTypes from 'prop-types';
import './ImageGallery.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export function ImageGallery({ images, selectedImage }) {
    return (
        <ul className='ImageGallery'>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    
                    key={id}
                    previewImg={webformatURL}
                    tags={tags}
                    selectedImage={() => selectedImage(largeImageURL, tags)}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
    selectedImage: PropTypes.func,
};