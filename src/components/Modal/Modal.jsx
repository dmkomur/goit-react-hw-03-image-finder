import React from 'react';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal('', '');
    }
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.toggleModal('', '');
    }
  };
  render() {
    return (
      <div className="Overlay" onClick={this.onBackdropClick}>
        <div className="Modal">
          <img src={this.props.img} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
