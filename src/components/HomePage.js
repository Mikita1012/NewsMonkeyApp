import React, { Component } from "react";
import { Link } from "react-router-dom";

export class HomePage extends Component {
  render() {
    return (
      <>
      <h1 className="text-center my-2">Click on any of the type of news below to go to the news</h1>
        <ul className="list-group my-4">
          <li className="list-group-item text-center"><Link to="/general">GENERAL</Link></li>
          <li className="list-group-item text-center"><Link to="/business" >BUSINESS</Link></li>
          <li className="list-group-item text-center"><Link to="/entertainment">ENTERTAINMENT</Link></li>
          <li className="list-group-item text-center"><Link to="/health">HEALTH</Link></li>
          <li className="list-group-item text-center"><Link to="/sports">SPORTS</Link></li>
          <li className="list-group-item text-center"><Link to="/technology">TECHNOLOGY</Link></li>
          <li className="list-group-item text-center"><Link to="/science">SCIENCE</Link></li>
        </ul>
      </>
    );
  }
}

export default HomePage;
