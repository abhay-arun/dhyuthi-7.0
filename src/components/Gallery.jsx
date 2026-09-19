import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Gallery() {
  const images = [
    {
      src: "/brand/dhythi-image1.webp",
      accent: "linear-gradient(135deg, rgba(0,181,226,0.28), rgba(0,98,155,0.12))",
    },
    {
      src: "/brand/dhythi-image2.webp",
      accent: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,98,155,0.2))",
    },
    {
      src: "/brand/dhythi-image3.webp",
      accent: "linear-gradient(135deg, rgba(0,98,155,0.22), rgba(255,255,255,0.05))",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlideClass = (index) => {
    const diff = (index - currentIndex + images.length) % images.length;

    if (diff === 0) return "active";
    if (diff === 1) return "next";
    if (diff === images.length - 1) return "prev";
    return "hidden";
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

        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-image-box ${getSlideClass(index)}`}
            style={{
              background: `linear-gradient(135deg, rgba(10,10,10,0.25), rgba(10,10,10,0.1)), url(${image.src}) center/cover no-repeat`,
            }}
          />
        ))}

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
            className={`gallery-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;