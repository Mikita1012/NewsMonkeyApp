import React  from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imgUrl
              ? "https://image.cnbcfm.com/api/v1/image/108068792-1732715204514-gettyimages-2186409060-TARGET_SHOPPERS.jpeg?v=1741027022&w=1920&h=1080"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title} <span className="badge text-bg-secondary">{source}</span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By <strong>{!author ? "unknown" : author} </strong> <br /> on{" "}
              <strong>{new Date().toUTCString(date)}</strong>{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
        ``
      </div>
    </div>
  );
};

export default NewsItem;
