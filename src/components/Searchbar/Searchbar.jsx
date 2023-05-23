import { ImSearch } from 'react-icons';

export const Searchbar = ({ onSubmit }) => {
  function hedleSubmit(e) {
    e.preventDefault();
    onSubmit(e.target[1].value);
  }
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={e => hedleSubmit(e)}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">
            {/* <ImSearch /> */}
            Search
          </span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
