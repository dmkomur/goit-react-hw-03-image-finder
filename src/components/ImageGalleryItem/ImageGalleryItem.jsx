export const ImageGalleryItem = ({ data, toggleModal, statusModal }) => {
  return data.map(el => (
    <li
      className="ImageGalleryItem-image"
      key={el.id}
      onClick={() => toggleModal(el.largeImageURL, el.tags)}
    >
      <img src={el.webformatURL} alt={el.tags} />
    </li>
  ));
};
