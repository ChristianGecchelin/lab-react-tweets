import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamps";
import User from "./User";
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.user} />
          <Timestamp time={props.timestamp} />
        </div>

        <Message message={props.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
export default Tweet;
