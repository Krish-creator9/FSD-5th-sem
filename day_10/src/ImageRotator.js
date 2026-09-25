import React from 'react';

const ImageRotator = () => {
  const [angle, setAngle] = React.useState(0);

  const rotateLeft = () => {
    setAngle(angle - 90);
  };

  const rotateRight = () => {
    setAngle(angle + 90);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Rotator
      </h1>

      <img
        src="https://images.pexels.com/photos/33915135/pexels-photo-33915135.jpeg"
        alt="image-here"
        style={{
          height: "200px",
          width: "200px",
          transform: `rotate(${angle}deg)`
        }}
      />

      <br />

      <button onClick={rotateLeft}>Left</button>
      <button onClick={rotateRight}>Right</button>
    </div>
  );
};

export default ImageRotator;