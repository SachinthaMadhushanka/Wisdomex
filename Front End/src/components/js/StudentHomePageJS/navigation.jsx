import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top py-0">
        <div className="container row">
          <div className="navbar-header col-4">
              <a className="navbar-brand page-scroll" href="#page-top">
                STUDENT HOME PAGE
              </a>{" "}
          </div>

          <div className="collapse navbar-collapse col-8" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right list-group list-group-horizontal pt-2">
              <li>
                <a href="#team" className="page-scroll">
                  SUBJECTS
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  COMMUNICATE
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
