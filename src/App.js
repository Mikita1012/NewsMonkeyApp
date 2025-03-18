import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NewsItem from "./components/NewsItem";
import HomePage from "./components/HomePage";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize=10;
  apiKey= process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          />
          {/* <News /> */}
          <Routes>
            <Route
               exact path="/"
              element={
                <HomePage/>
              }
            />
            <Route
               exact path="/general"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={8} category="general" country="us" />
              }
            />
            <Route
               exact path="/business"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={8} category="business" country="us" />
              }
            />
            <Route
               exact path="/entertainment"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={8} category="entertainment" country="us" />
              }
            />
        
            <Route
               exact path="/health"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={8} category="heatlh" country="us" />
              }
            />
            <Route
               exact path="/science"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={8} category="science" country="us" />
              }
            />
            <Route
               exact path="/sports"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={8} category="sports" country="us" />
              }
            />
            <Route
               exact path="/technology"
              element={
                <News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={8} category="technology" country="us" />
              }

            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
