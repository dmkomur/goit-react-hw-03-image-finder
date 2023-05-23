import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem data={data} />
    </ul>
  );
};
