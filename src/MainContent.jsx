import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://www.larisarealtech.com/wp-content/uploads/2024/03/3-2.webp',
      alt: 'Flower Arch Decor',
    },
    {
      image: 'https://img.staticmb.com/mbcontent/images/uploads/2023/8/Heaven_4.jpg',
      alt: 'Floral Centerpiece',
    },
    {
      image: 'https://nimasonti.com/wp-content/uploads/2020/08/img_2227-2.jpg?w=1024',
      alt: 'Elegant Table Setup',
    },
  ];

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <main>
      <section className="hero">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              className={`mySlides ${index === currentSlide ? 'active' : ''}`}
              key={index}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <img src={slide.image} alt={slide.alt} className="slide-image" />
            </div>
          ))}

          {/* Next and Previous Buttons */}
          <a className="prev" onClick={prevSlide}>&#10094;</a>
          <a className="next" onClick={nextSlide}>&#10095;</a>
        </div>

        <section className="decoration-by-occasion">
          <center>
            <h2>Decoration By Occasions</h2>
          </center>
          <div className="occasion-items">
            <div className="occasion-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSJ7NrJI4MgpPqtgd989J4nii2oqg61LzhfU97DqvqW7B_vX3wWwT2lTy0TUT51G3ur0&usqp=CAU"
                alt="Birthday"
              />
              <p>Birthday</p>
            </div>
            <div className="occasion-item">
              <img
                src="https://haplun.in/uploads/product_images/medium/1680766442_6155996551.webp"
                alt="Anniversary"
              />
              <p>Anniversary</p>
            </div>
            <div className="occasion-item">
              <img
                src="https://cdn0.weddingwire.in/article/5480/original/1280/jpg/100845-wedding-stage-3.jpeg"
                alt="Wedding"
              />
              <p>Wedding</p>
            </div>

            {/* Additional Occasion Items */}
            <div className="occasion-item">
              <img
                src="https://takerentpe.com/media/images/products/2024/01/Untitled_design_1_PdSY3x91.webp"
                alt="Baby Shower"
              />
              <p>Baby Shower</p>
            </div>
            <div className="occasion-item">
              <img
                src="https://img.clevup.in/337348/1705926102368_SKU-1040_0.jpg?width=600&format=webp"
                alt="Engagement"
              />
              <p>Engagement</p>
            </div>
            <div className="occasion-item">
              <img
                src="https://media.designcafe.com/wp-content/uploads/2020/09/21140648/festival-decoration-ideas-at-home.jpg"
                alt="Festival"
              />
              <p>Festival</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MainContent;
