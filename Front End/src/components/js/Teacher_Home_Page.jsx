import React, { Component } from 'react'
import Navigation from './TeacherHomePageJS/navigation';
import Header from './TeacherHomePageJS/header';
import Team from './TeacherHomePageJS/Team';
import Contact from './TeacherHomePageJS/contact';
import JsonData from '../../data/data.json';

import "../css/Teacher_Home_Page/style.css";
import "../css/Teacher_Home_Page/bootstrap.css";

export class Student_Home_Page extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default Student_Home_Page;