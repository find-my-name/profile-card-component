interface Props {
  followersCount: string;
  likesCount: string;
  photosPosted: string;
}

const Info = ({ followersCount, likesCount, photosPosted }: Props) => {
  return (
    <>
      <div className="info">
        <div className="followers">
          <h2>{followersCount}</h2>
          <p>Followers</p>
        </div>
        <div className="likes">
          <h2>{likesCount}</h2>
          <p>Likes</p>
        </div>
        <div className="Photos">
          <h2>{photosPosted}</h2>
          <p>Photos</p>
        </div>
      </div>
    </>
  );
};

export default Info;
