import PropTypes from 'prop-types';
import './ImageGalleryItem.css'

export function ImageGalleryItem({ tags, previewImg, selectedImage }) {
    return (
        <li className='ImageGalleryItem'>
            <img className='ImageGalleryItem-image' src={previewImg} alt={tags} onClick={selectedImage} />
        </li>
    );
}
ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
    selectedImage: PropTypes.func,
};