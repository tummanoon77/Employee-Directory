import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <form>
        <div className="form-group">
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For a people"
            id="search"
          />
          <button  className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
