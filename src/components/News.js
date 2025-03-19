import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${captilizeFirstLetter(
  //     props.category
  //   )} - NewsMonkey`;

  const captilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // constructor(props) {
  //   super(props);
  //   console.log("I am a constructor from News Component.");

  // }

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page - 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("render");

    console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const handlePreviousClick = async () => {
    // this.setState({page: this.state.page - 1})
    setPage(page - 1);
    updateNews();
  };
  const handleNextClick = async () => {
    // this.setState({page: this.state.page + 1})
    setPage(page - 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    // this.setState({ pages: this.state.pages + 1 });
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${setPage(
      page + 1
    )}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("render");
    console.log(parsedData);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center">
        {`NewsMonkey - Top Headlines on ${captilizeFirstLetter(
          props.category
        )}`}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
        style={{overflow: "hidden"}}
      >
        {/* {this.state.loading && <Spinner />} */}
        {/* <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}> */}
        {/* <NewsItem
                  title={
                    element.title.length >= 30
                      ? element.title.slice(0, 30) + "..."
                      : element.title
                  }
                  description={
                    element.description.length >= 60
                      ? element.description.slice(0, 87) + "..."
                      : element.description
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                /> */}
        {/* above is a trenay operator to limit the chars for descp and title chars */}
        {/* <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div> */}
        {/* );
            })}
        </div> */}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

          <div className="container"> */}

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                {/* <NewsItem
                  title={
                    element.title.length >= 30
                      ? element.title.slice(0, 30) + "..."
                      : element.title
                  }
                  description={
                    element.description.length >= 60
                      ? element.description.slice(0, 87) + "..."
                      : element.description
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                /> */}
                {/* above is a trenay operator to limit the chars for descp and title chars */}
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        {/* </div> */}

        {/* <div className="container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            disabled={this.state.pages <= 1}
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={F
              this.state.pages + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  category: "business",
  // pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
