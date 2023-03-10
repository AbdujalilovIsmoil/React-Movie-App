import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "panda",
      type: "all"
    };
  }

  keydownHandler = (e) => {
    if (e.key == "Enter") {
      this.props.changeInputHandler(e.target.value, this.state.type);
    }
  };

  checkedChangeHandler = (e) => {
    this.setState({ type: e.target.value }, () => {
      this.props.changeInputHandler(this.state.search, e.target.value);
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.changeInputHandler(this.state.search, this.state.type);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light position-sticky top-0">
          <div className="container">
            <a className="navbar-brand d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-none">
              React Movie App
            </a>
            <form
              className="form d-flex input-group w-auto"
              onSubmit={this.submitHandler}
            >
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.keydownHandler}
              />
              <span className="input-group-text border-0" id="search-addon">
                <button type="submit" className="btn btn-primary btn-search">
                  <i className="fas fa-search"></i>
                </button>
              </span>
            </form>
          </div>
        </nav>
        <div className="container">
          <div className="form-check form-check-inline mt-4">
            <label htmlFor="all" className="form-check-label">
              All
              <input
                id="all"
                className="form-check-input"
                type="radio"
                value="all"
                checked={this.state.type == "all"}
                onChange={this.checkedChangeHandler}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label htmlFor="movie" className="form-check-label">
              Movie
              <input
                className="form-check-input"
                id="movie"
                type="radio"
                value="movie"
                checked={this.state.type == "movie"}
                onChange={this.checkedChangeHandler}
              />
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label htmlFor="series" className="form-check-label">
              Series
              <input
                id="series"
                className="form-check-input"
                type="radio"
                value="series"
                checked={this.state.type == "series"}
                onChange={this.checkedChangeHandler}
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
