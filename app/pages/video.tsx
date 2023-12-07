import React from "react";

const VideoPage = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ibZYkjYiADQ?si=0_qXzp5ax3PFyswx"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPage;
