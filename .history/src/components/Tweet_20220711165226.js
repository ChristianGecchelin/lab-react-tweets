function Tweet(props) {
  console.log(props.user);
  return (
    <div className="tweet">
      <img src={user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.user.name}</span>
            <span className="handle">{props.user.handle}</span>
          </span>

          <span className="timestamp">{props.timestamp}</span>
        </div>

        <p className="message">{props.message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
