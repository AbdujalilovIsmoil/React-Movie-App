import React, { Component } from "react";
import Movies from "./Movies";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=d9302648&s=panda`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  changeInputHandler = (str, type) => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=d9302648&s=${str}&type=${
        type == "all" ? "" : type
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    return (
      <>
        <Navbar changeInputHandler={this.changeInputHandler} />
        <div className="container">
          <main className="main mt-5">
            <div className="row">
              {this.state.loading ? (
                <Loader />
              ) : (
                this.state.movies?.map((el) => (
                  <Movies movies={el} key={el.imdbID} />
                ))
              )}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
