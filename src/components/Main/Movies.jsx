import React, { Component } from "react";

class Movies extends Component {
  render() {
    const { movies } = this.props;

    return (
      <>
        <div className="col col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
          <div className="card">
            <img
              src={movies.Poster}
              className="card-img-top"
              alt="Fissure in Sandstone"
            />
            <div className="card-body">
              <h5 className="card-title">{movies.Title}</h5>
              <div className="box d-flex justify-content-between mt-3">
                <h6 className="card-title">Year: {movies.Year}</h6>
                <h6 className="card-title">Type: {movies.Type}</h6>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
