import React from 'react';
import {ColorRing} from 'react-loader-spinner';
import './Loader.css'

export const Loader = () => (
    <div className="loader">
       <ColorRing
  visible={true}
  height="180"
  width="180"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    </div>
);