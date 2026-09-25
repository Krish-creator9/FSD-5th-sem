import React from 'react';

const ImageSlider = () => {
  const [index, setIndex] = React.useState(0);

  const images = [
    "https://images.pexels.com/photos/639086/pexels-photo-639086.jpeg?cs=srgb&dl=beautiful-beautiful-flowers-bloom-639086.jpg&fm=jpg",
    "https://tse1.mm.bing.net/th/id/OIP.-F3VdbNeLmEUZAkt6FMBigHaE9?r=0&pid=ImgDet&w=474&h=317&rs=1&o=7&rm=3",
    "https://4.bp.blogspot.com/-hUcx4fAPgSY/WaVTsADjR0I/AAAAAAAABzg/uVO_SlJAHTUFZWpa8CNuQfoDcgTU2elhACLcBGAs/s1600/4.jpeg",
    "https://images2.alphacoders.com/692/692432.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.0OyAnosombBCLr81-OR3XQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  ];

  const left = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const right = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "blue", color: "white" }}>
        ImageSlider
      </h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{ height: "200px", width: "200px" }}
      />

      <br />

      <button onClick={left}>Left</button>
      <button onClick={right}>Right</button>
    </div>
  );
};

export default ImageSlider;