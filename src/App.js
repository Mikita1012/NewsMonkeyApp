import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NewsItem from "./components/NewsItem";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          {/* <News /> */}
          <Routes>
            <Route
               exact path="/general"
              element={
                <News key="general" pageSize={8} category="general" country="us" />
              }
            />
            <Route
               exact path="/business"
              element={
                <News key="business" pageSize={8} category="business" country="us" />
              }
            />
            <Route
               exact path="/entertainment"
              element={
                <News key="entertainment" pageSize={8} category="entertainment" country="us" />
              }
            />
        
            <Route
               exact path="/health"
              element={
                <News key="health" pageSize={8} category="heatlh" country="us" />
              }
            />
            <Route
               exact path="/science"
              element={
                <News key="science" pageSize={8} category="science" country="us" />
              }
            />
            <Route
               exact path="/sports"
              element={
                <News key="sports" pageSize={8} category="sports" country="us" />
              }
            />
            <Route
               exact path="/technology"
              element={
                <News key="technology" pageSize={8} category="technology" country="us" />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
