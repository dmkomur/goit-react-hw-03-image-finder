import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { handleFetch } from './utilities/Api';
import { Button } from './Button/Button';

export class App extends React.Component {
  state = {
    pictures: [],
    request: '',
    page: 1,
    totalPage: 1,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      const response = await handleFetch(this.state.request, this.state.page);
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.hits],
      }));
    }
  }

  onSubmit = async request => {
    await this.setState({ request, page: 1 });
    const response = await handleFetch(this.state.request, this.state.page);
    this.setState(prevState => ({
      pictures: [...response.hits],
      totalPage: Math.ceil(response.total / 12),
    }));
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
        <ImageGallery data={this.state.pictures} />
        {this.state.totalPage > this.state.page && (
          <Button handleClick={this.onLoadBtnClick} />
        )}
      </div>
    );
  }
}
