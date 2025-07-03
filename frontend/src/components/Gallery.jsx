import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img7.jpeg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpeg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
