import React, { Component } from 'react'
import Navigation from './StudentHomePageJS/navigation';
import Header from './StudentHomePageJS/header';
import Team from './StudentHomePageJS/Team';
import Contact from './StudentHomePageJS/contact';
import JsonData from '../../data/data.json';

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