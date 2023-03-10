import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-light shadow-sm text-center text-lg-start mt-5">
          <div className="text-center p-3">
            © {new Date().getFullYear()} Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
