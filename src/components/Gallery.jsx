import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
  const images = [
    "Image 1",
    "Image 2",
    "Image 3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="gallery" id="gallery">
      <div className="section-label">06 — GALLERY</div>

      <div className="gallery-header">
        <h2 className="split-heading gallery-title">
          <span className="highlight-text">Moments that</span>
          <span className="muted-text"> spark ideas.</span>
        </h2>

        <p className="centered-copy gallery-footer-copy">
          A glimpse into the energy, creativity and community surrounding Dhyuthi.
        </p>
      </div>

      <div className="gallery-carousel">

        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={previousImage}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="gallery-image-box">
          <span>{images[currentIndex]}</span>
        </div>

        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;