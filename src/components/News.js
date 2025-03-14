import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // articles = [
  //   {
  //     source: { id: "news24", name: "News24" },
  //     author: "Nick Wilson",
  //     title:
  //       "RCL Foods pays its first interim dividend in three years as profit jumps",
  //     description:
  //       "RCL Foods, which is controlled by Johann Rupert's Remgro, paid its first interim dividend in three years on Monday as it also saw earnings growth come in at the higher end of its forecast in half-year results reported on Monday.",
  //     url: "https://www.news24.com/fin24/companies/rcl-foods-pays-its-first-interim-dividend-in-three-years-as-profit-jumps-20250303",
  //     urlToImage:
  //       "https://cdn.24.co.za/files/Cms/General/d/3976/e7c85fbf382341149503d77e513f8e84.jpg",
  //     publishedAt: "2025-03-03T10:20:17",
  //     content:
  //       "RCL Foods, which is controlled by Johann Rupert's Remgro, paid its first interim dividend in three years on Monday as it also saw earnings growth come in at the higher end of its forecast in half-yea… [+28 chars]",
  //   },
  //   {
  //     source: { id: "google-news-uk", name: "Google News (UK)" },
  //     author: null,
  //     title: "Arab states and UN condemn Gaza aid blockade by Israel - BBC",
  //     description:
  //       "\u003Col\u003E\u003Cli\u003EArab states and UN condemn Gaza aid blockade by Israel  BBC\r\n\u003C/li\u003E\u003Cli\u003EMiddle East crisis live: Israel accused of using ‘food as weapon of war’ in aid blockade on Gaza  The Guardian\r\n\u003C/li\u003E\u003Cli\u003EFears of ‘famine’ in Gaza as Israel cuts off aid, reneges on…",
  //     url: "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBEbjNmUUlRMjB6R29QZGZGX3RtWHFsZ0pNTHR6WFN3UmFlWXlrM3k3dXZZUnFqQ2NOYUJ6VmNwNDVDa3JHSXB6VEpGU0ZlTy11ZDVUNnQ5SnNQUzBz0gFiQVVfeXFMTXJSTGRvQWJLRGVfdXQ2dHFuSExDc3hDRDZqTjZNTXNsQzZVeWF4RHZoT0pkU3FubjYyZnBDelF3U2ltckY3NkcwckRqMTNIYlhsYWpPbjRWMmQwaG5DMzJWZHc?oc=5",
  //     urlToImage: null,
  //     publishedAt: "2025-03-03T01:04:49+00:00",
  //     content:
  //       "\u003Col\u003E\u003Cli\u003EArab states and UN condemn Gaza aid blockade by Israel  BBC\r\n\u003C/li\u003E\u003Cli\u003EMiddle East crisis live: Israel accused of using ‘food as weapon of war’ in aid blockade on Gaza  The Guardian\r\n\u003C/li\u003E\u003Cli\u003E… [+201 chars]",
  //   },
  //   {
  //     source: { id: "associated-press", name: "Associated Press" },
  //     author: "Cara Anna",
  //     title: "Israel has cut off all supplies to Gaza. Here's what that means",
  //     description:
  //       "Israel has cut off the entry of all food and other goods into Gaza in an echo of the siege it imposed in the earliest days of its war with Hamas. The United Nations and other humanitarian aid providers are sharply criticizing the decision and calling it a vio…",
  //     url: "https://apnews.com/article/gaza-israel-hamas-palestinians-aid-explainer-ecc0e70d5ff1120a04bf36626dfd96f4",
  //     urlToImage:
  //       "https://dims.apnews.com/dims4/default/9b37ff9/2147483647/strip/true/crop/4724x2657+0+246/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2F2a%2Fe7bf969bcf911ef73fc8802b4d88%2Ffa20088a1a2e490fb1ad0d3c8a512595",
  //     publishedAt: "2025-03-02T19:18:57Z",
  //     content:
  //       "Israel has cut off the entry of all food and other goods into Gaza in an echo of the siege it imposed in the earliest days of its war with Hamas. The United Nations and other humanitarian aid provide… [+5036 chars]",
  //   },
  //   {
  //     source: { id: "the-next-web", name: "The Next Web" },
  //     author: "Siôn Geschwindt",
  //     title:
  //       "Mobility giant Bolt adopts self-driving Starship robots for food delivery",
  //     description:
  //       "Bolt plans to roll out thousands of the robots across multiple countries, starting in its home city of Tallinn later this year.",
  //     url: "http://thenextweb.com/news/mobility-giant-bolt-adopts-self-driving-starship-robots-for-food-delivery",
  //     urlToImage:
  //       "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2Fbolt-starship-robot-delivery.jpg&signature=c902ce701ce95e20f6fd703a50ad52ca",
  //     publishedAt: "2023-06-22T09:17:15Z",
  //     content:
  //       "European ride-hailing firm Bolt will start using self-driving robots to deliver customers food as part of a new partnership with fellow Estonian company Starship Technologies, announced yesterday.  \r… [+2447 chars]",
  //   },
  //   {
  //     source: { id: "the-times-of-india", name: "The Times of India" },
  //     author: "Dipak K Dash",
  //     title:
  //       "Government to provide 5 kg free food grains to poor for May & June",
  //     description:
  //       "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
  //     url: "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
  //     urlToImage:
  //       "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     publishedAt: "2021-04-23T04:23:00Z",
  //     content: null,
  //   },
  // ];

  static defaultProps = {
    country: "us",
    category: "business",
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  captilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("I am a constructor from News Component.");
    this.state = {
      // articles: this.articles, {/* this was written because we already had articles defined above the const. Since we commented it out we do not need it. The empty array before we fetch the api */}
      articles: [],
      loading: false,
      pages: 1,
      totalResults: 0
    };
    document.title = `${this.captilizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e4cebccc18554feab71f2b6540c415b6&page=${
      this.state.pages - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("render");

    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=e4cebccc18554feab71f2b6540c415b6&page=${
    //   this.state.pages - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log("render");

    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  // handlePreviousClick = async () => {
  //   console.log("prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=e4cebccc18554feab71f2b6540c415b6&page=${
    //   this.state.pages - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   pages: this.state.pages - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });

  //   this.setState({ pages: this.state.pages - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   console.log("next");
    // if (
    //   !(
    //     this.state.pages + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=e4cebccc18554feab71f2b6540c415b6&page=${
    //     this.state.pages + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({ articles: parsedData.articles });
    //   this.setState({
    //     pages: this.state.pages + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }

  //   this.setState({ pages: this.state.pages + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    
    this.setState({pages: this.state.pages + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=e4cebccc18554feab71f2b6540c415b6&page=${
      this.state.pages - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("render");
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
  }
  render() {
    return (
      <>
        <h1 className="text-center">
          {`NewsMonkey - Top Headlines on ${this.captilizeFirstLetter(
            this.props.category
          )}`}
        </h1>
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
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
            
          
          <div className="row">
            {this.state.articles.map((element) => {
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
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
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
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
