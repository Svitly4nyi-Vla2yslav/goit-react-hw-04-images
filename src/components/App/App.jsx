import React, { useState, useEffect } from 'react';
import './App.css';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { FetchPixabay } from 'components/Api/PixabayApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import Notiflix from 'notiflix';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [alt, setAlt] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery || page < 1) return;

      setStatus('pending');

      try {
        const imageData = await FetchPixabay(searchQuery, page);
        setTotalHits(imageData.total);
        const imagesHits = imageData.hits;

        if (!imagesHits.length) {
          Notiflix.Notify.warning(
            'No results were found for your search, please try something else.',
            { timeout: 6000 }
          );
        }

        setImages((prevImages) => [...prevImages, ...imagesHits]);
        setStatus('resolved');

        if (page > 1) {
          const CARD_HEIGHT = 300;
          window.scrollBy({
            top: CARD_HEIGHT * 2,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        Notiflix.Notify.info(`Sorry something went wrong. ${error.message}`, {
          timeout: 6000,
        });
        setError(error);
        setStatus('rejected');
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handleFormSubmit = (search) => {
    if (search === searchQuery) {
      return;
    }
    setSearchQuery(search);
    setPage(1);
    setImages([]);
    setSelectedImage(null);
    setAlt(null);
    setStatus('idle');
    setError(null);
  };

  const handleSelectedImage = (largeImageUrl, tags) => {
    setSelectedImage(largeImageUrl);
    setAlt(tags);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />

      {status === 'pending' && <Loader />}
      {error && (
        <h1 style={{ color: 'orangered', textAlign: 'center' }}>
          {error.message}
        </h1>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} selectedImage={handleSelectedImage} />
      )}
      {images.length > 0 && images.length !== totalHits && (
        <Button onClick={loadMore} />
      )}
      {selectedImage && (
        <Modal selectedImage={selectedImage} tags={alt} onClose={closeModal} />
      )}
    </div>
  );
}


