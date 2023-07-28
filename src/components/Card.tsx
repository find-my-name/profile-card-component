import Avatar from "./Avatar";
import Info from "./Info";

const userInfo = {
  imageUrl: "/images/image-victor.jpg",
  name: "Victor Crest",
  age: 26,
  city: "London",
  followers: "80K",
  likes: "803K",
  photos: "1.4K",
};

const Card = () => {
  return (
    <>
      <div className="card">
        <img src="/images/bg-pattern-card.svg" alt="" />
        <div className="hero">
          <Avatar
            avatarUrl={userInfo.imageUrl}
            name={userInfo.name}
            age={userInfo.age}
            city={userInfo.city}
          />
          <div className="border"></div>
          <Info
            followersCount={userInfo.followers}
            likesCount={userInfo.likes}
            photosPosted={userInfo.photos}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
