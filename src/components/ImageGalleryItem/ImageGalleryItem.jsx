export const ImageGalleryItem = ({ data }) => {
  return data.map(el => (
    <li className="ImageGalleryItem-image" key={el.id}>
      <img src={el.webformatURL} alt={el.tags} />
    </li>
  ));
};
