import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { handleFetch } from './utilities/Api';
import { Button } from './Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export class App extends React.Component {
  state = {
    pictures: [],
    request: '',
    page: 1,
    totalPage: 1,
    isOpen: false,
    url: '',
    alt: '',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      const response = await handleFetch(this.state.request, this.state.page);
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.hits],
      }));
    }
    if (prevState.request !== this.state.request) {
      const response = await handleFetch(this.state.request, this.state.page);
      this.setState(prevState => ({
        pictures: [...response.hits],
        totalPage: Math.ceil(response.total / 12),
      }));
    }
  }
  toggleModal = (url, alt) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen, url, alt }));
  };
  onSubmit = request => {
    this.setState({ request, page: 1 });
  };

  onLoadBtnClick = () => {
    if (this.state.page < this.state.totalPage) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            data={this.state.pictures}
            toggleModal={this.toggleModal}
            statusModal={this.state.isOpen}
          />
        </ImageGallery>

        {this.state.totalPage > this.state.page && (
          <Button handleClick={this.onLoadBtnClick} />
        )}
        {this.state.isOpen && (
          <Modal
            toggleModal={this.toggleModal}
            img={this.state.url}
            alt={this.state.alt}
          />
        )}
      </div>
    );
  }
}
