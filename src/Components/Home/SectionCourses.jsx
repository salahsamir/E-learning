// SectionCourses.js
import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SectionCourses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0", // No padding around the center element
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
   <div className="max-w-7xl mx-auto  my-5">
     <Slider {...settings} className="slider-container">
      <div className={currentSlide === 0 ? 'center-slide' : ''}>
        <img src="https://media.istockphoto.com/id/1457297918/photo/successful-mid-adult-ceos-meeting-in-international-corporation.jpg?s=612x612&w=0&k=20&c=Ulj--fXXdLJb66nAZglnykdabZxN1aVvp2i09UjGTbg=" className='w-68 h-68 p-2' alt="Slide 1" />
      </div>
      <div className={currentSlide === 1 ? 'center-slide' : ''}>
      <img src="https://media.istockphoto.com/id/1457297918/photo/successful-mid-adult-ceos-meeting-in-international-corporation.jpg?s=612x612&w=0&k=20&c=Ulj--fXXdLJb66nAZglnykdabZxN1aVvp2i09UjGTbg=" className='w-68 h-68 p-2' alt="Slide 1" />
      </div>
      <div className={currentSlide === 2 ? 'center-slide' : ''}>
      <img src="https://media.istockphoto.com/id/1457297918/photo/successful-mid-adult-ceos-meeting-in-international-corporation.jpg?s=612x612&w=0&k=20&c=Ulj--fXXdLJb66nAZglnykdabZxN1aVvp2i09UjGTbg=" className='w-68 h-68 p-2' alt="Slide 1" />
      </div>
      <div className={currentSlide === 2 ? 'center-slide' : ''}>
      <img src="https://media.istockphoto.com/id/1457297918/photo/successful-mid-adult-ceos-meeting-in-international-corporation.jpg?s=612x612&w=0&k=20&c=Ulj--fXXdLJb66nAZglnykdabZxN1aVvp2i09UjGTbg=" className='w-68 h-68 p-2' alt="Slide 1" />
      </div>
    </Slider>
   </div>
  );
}
