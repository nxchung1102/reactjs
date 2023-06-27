import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Thanh Âm Indie Buồn",
      thubnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/c/f/9/dcf9c017691ed222dbcfec1d9c0c29a4.jpg",
    },
    {
      id: 2,
      name: "Disco V",
      thubnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/c/e/66ce372bc6b037bb59ff1464ab3a2057.jpg",
    },
    {
      id: 3,
      name: "Rap Việt Cực Chất",
      thubnaiUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/b/2/8/cb28c1068e4ee7843f6cb3cf2197e2fa.jpg",
    },
  ];
  return (
    <div>
      <h2>có thể bạn muốn nghe</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
