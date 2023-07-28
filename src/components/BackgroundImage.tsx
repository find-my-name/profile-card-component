const imageInfo = {
  topImageUrl: "/images/bg-pattern-top.svg",
  bottomImageUrl: "/images/bg-pattern-bottom.svg",
};

const BackgroundImage = () => {
  return (
    <>
      <div className="bg-container">
        <img src={imageInfo.topImageUrl} className="top-image" alt="" />
        <img src={imageInfo.bottomImageUrl} className="bottom-image" alt="" />
      </div>
    </>
  );
};

export default BackgroundImage;
