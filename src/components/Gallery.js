import React, { useState } from "react";
import "./Gallery.css";
import { FaTimes } from "react-icons/fa";
import ImageOne from "../images/ladki1.jpg";
import ImageTwo from "../images/ladki2.jpg";
import ImageThree from "../images/ladka1.jpg";
import ImageFour from "../images/monument1 (4).jpg";
import ImageFive from "../images/dadaji.jpg";
import ImageSix from "../images/weddinghands (1).jpg";
import styled from "styled-components";

const CloseIcon = styled(FaTimes)`
  color: white;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  padding: 5px;
  background-color: black;

  cursor: pointer;
`;

const Gallery = () => {
  let Data = [
    {
      id: 1,
      image: ImageOne,
    },
    {
      id: 2,
      image: ImageTwo,
    },
    {
      id: 3,
      image: ImageThree,
    },
    {
      id: 4,
      image: ImageFour,
    },
    {
      id: 5,
      image: ImageFive,
    },
    {
      id: 6,
      image: ImageSix,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (image) => {
    setTempImgSrc(image);
    setModel(true);
  };

  return (
    <>
    <h2 className="galleryHeader" >Photo-Gallery</h2>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>
      </div>
      <div className="gallery">
        {Data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.image)}
            >
              <img src={item.image} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
