import "./Card_new.scss";

function Card(poop) {
  const { src, title, subTitle, body, author, date, tags } = poop.poop;

  return (
    <div className="blog-card-container">
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${src})`,
            }}
          ></div>
          <ul className="details">
            <li className="author">
              <span>{author}</span>
            </li>
            <li className="date">{date}</li>
          </ul>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p>{body}</p>
          <p className="read-more">
            <div>Read More</div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
