import React from "react";

import image1 from "../images/music1.png";

import image5 from "../images/music5.png";

import image7 from "../images/music7.png";
import image8 from "../images/music8.png";

import image10 from "../images/music10.png";
import image12 from "../images/music12.png";
import cover3 from "../images/cover3.png";
import cover2 from "../images/cover2.png";
import cover4 from "../images/cover4.png";
import cover5 from "../images/cover5.png";

function MusicList() {
  return (
    <div className="movieList">
      <h4 className="header4">Original Soundtrack</h4>
      <div className="row1">
        <img src={image12} alt="music-album" />
        <img src={cover5} alt="music-album" />
        <img src={image1} alt="music-album" />
        <img src={image8} alt="music-album" />
        <img src={image8} alt="music-album" />
      </div>
      <div className="row1">
        <img src={image1} alt="music-album" />
        <img src={image7} alt="music-album" />
        <img src={image5} alt="music-album" />
        <img src={image10} alt="music-album" />
        <img src={cover3} alt="music-album" />
      </div>
      <div className="row1">
        <img src={cover3} alt="music-album" />
        <img src={image1} alt="music-album" />
        <img src={cover2} alt="music-album" />
        <img src={cover4} alt="music-album" />
        <img src={image1} alt="music-album" />
      </div>
    </div>
  );
}

export default MusicList;
