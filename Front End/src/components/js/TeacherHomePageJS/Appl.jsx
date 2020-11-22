// import React, { Component } from 'react'
// import Navigation from './navigation';
// import Header from './header';
// import Team from './Team';
// import Contact from './contact';
// import $ from 'jquery';

// import "../../css/Student_Home_Page/bootstrap.css"; 
// import "../../css/Student_Home_Page/style.css";
// import "../../css/Student_Home_Page/nivo-lightbox/nivo-lightbox.css";
// import "../../css/Student_Home_Page/nivo-lightbox/default.css";

// export class App extends Component {
//   state = {
//     resumeData : {},
//   }
//   getResumeData(){
//     $.ajax({
//       url:'/data.json',
//       dataType:'json',
//       cache: false,
//       success: function(data){
//         this.setState({resumeData: data});
//       }.bind(this),
//       error: function(xhr, status, err){
//         console.log(err);
//         alert(err);
//       }
//     });
//   }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
