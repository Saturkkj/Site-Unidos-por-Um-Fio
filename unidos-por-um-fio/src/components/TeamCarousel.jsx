import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TeamCarousel.css';

const TeamCarousel = () => {
  const teamMembers = [
    { id: 1, image: '/assets/WhatsApp Image 2024-05-21 at 21.12.12.jpeg' },
    { id: 2, image: '/assets/WhatsApp Image 2024-05-21 at 21.14.01.jpeg' },
    { id: 3, image: '/assets/IMG_20241013_181718_982.jpg' },
    { id: 4, image: '/assets/SaveClip.App_449858196_816211557147928_122574603477745659_n.jpg' },
    { id: 5, image: '/assets/file.jpg' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id}>
            <img 
              src={member.image} 
              alt={`Team member ${member.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;